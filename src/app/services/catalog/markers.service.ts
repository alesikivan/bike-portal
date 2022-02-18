import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductMarker } from "src/app/shared/interfaces";
import { requests } from "src/app/shared/requests";

@Injectable({
  providedIn: 'root'
})
export class CatatlogMarkersService {
  constructor(
    private http: HttpClient
  ) {}

  getMarkers() {
    return [
      {id: 1, title: 'Маркер 1'},
      {id: 2, title: 'Маркер 2'},
      {id: 3, title: 'Маркер 3'},
      {id: 4, title: 'Маркер 4'},
      {id: 5, title: 'Маркер 5'},
    ]
  }

  loadItem(markers: ProductMarker[]) {
    const marker = {
      title: 'Маркер 6'
    }

    this.http.post<ProductMarker>(requests.getMarkers, marker)
      .subscribe((m: ProductMarker) => {
        markers.push(m)
      })

    return markers
  }
}
