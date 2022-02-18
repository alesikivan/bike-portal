import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductCategories } from "src/app/shared/interfaces";
import { requests } from "src/app/shared/requests";

@Injectable({
  providedIn: 'root'
})
export class CatatlogCategoriesService {
  constructor(
    private http: HttpClient
  ) {}

  getCategories() {
    return [
      {id: 1, title: 'Категория 1'},
      {id: 2, title: 'Категория 2'},
      {id: 3, title: 'Категория 3'},
      {id: 4, title: 'Категория 4'},
      {id: 5, title: 'Категория 5'},
    ]
  }

  loadItem(cateogories: ProductCategories[]) {
    const cateogory = {
      title: 'Категория 6'
    }

    this.http.post<ProductCategories>(requests.getCategory, cateogory)
      .subscribe((m: ProductCategories) => {
        cateogories.push(m)
      })

    return cateogories
  }
}
