import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay } from "rxjs/operators";
import { ProductFilter } from "src/app/shared/interfaces";
import { requests } from "src/app/shared/requests";

@Injectable({
  providedIn: 'root'
})
export class CatalogFiltersService {
  constructor(
    private http: HttpClient
  ) {}

  defaultItems() {
    return [
      {id: 1, title: 'Красный'},
      {id: 2, title: 'Черный'},
      {id: 3, title: 'Зеленый'},
    ]
  }
  removeFilters(ids: number[], filters: number[]) {
    return filters.filter( (n: number) => !ids.includes(n) )
  }

  selectFilter(id: number, filters: number[]) {
    if (filters.includes(id)){
      filters = this.removeFilters([id], filters)
    }
    else
      filters.push(id)

    return filters
  }

  loadItems() {
    const cateogory = {
      title: 'Какой-то цвет'
    }

    return this.http.post<ProductFilter>(requests.getFilter, cateogory)
      .pipe(delay(1000))
  }
}
