import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductBrands, ProductMarker } from "src/app/shared/interfaces";
import { requests } from "src/app/shared/requests";

@Injectable({
  providedIn: 'root'
})
export class CatatlogBrandsService {
  constructor(
    private http: HttpClient
  ) {}

  getBrands() {
    return [
      {id: 1, title: 'Бренди 1'},
      {id: 2, title: 'Бренди 2'},
      {id: 3, title: 'Бренди 3'},
      {id: 4, title: 'Бренди 4'},
      {id: 5, title: 'Бренди 5'},
    ]
  }

  loadItem(brands: ProductBrands[]) {
    const brand = {
      title: 'Бренди 6'
    }

    this.http.post<ProductBrands>(requests.getBrands, brand)
      .subscribe((m: ProductBrands) => {
        brands.push(m)
      })

    return brands
  }
}
