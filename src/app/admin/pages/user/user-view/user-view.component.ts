import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserModel } from 'src/app/admin/models/user';
import { UserService } from 'src/app/admin/services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  // user: Observable<UserModel> Refactor
  user: any

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user = this.userService.getUsersByID(params['id'])
    }, );
  }

}
