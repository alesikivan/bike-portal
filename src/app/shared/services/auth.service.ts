import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { FireBaseAuthResponse, User } from "../interfaces";
import { catchError, tap } from 'rxjs/operators'
import { TUntilDestroyed, UntilDestroyed } from "../decorators/until-destroyed";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public error$: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) {}

  get token(): string | null {
    const expDate = new Date(localStorage.getItem('token-exp') || '')
    if (new Date() > expDate) {
      this.logout()
      return null
    }

    return localStorage.getItem('token')
  }

  login (user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): Boolean {
    return !!this.token
  }

  private handleError(error: HttpErrorResponse) {
    const { message } = error.error.error

    this.error$.next(message)

    return throwError(error)
  }

  private setToken(res: FireBaseAuthResponse | any) {
    if (res) {
      const expDate = new Date(new Date().getTime() + Number(res.expiresIn) * 1000)
      localStorage.setItem('token', res.idToken)
      localStorage.setItem('token-exp', expDate.toString())
      // localStorage.setItem('role', 'admin')
    } else {
      localStorage.clear()
    }
  }
}
