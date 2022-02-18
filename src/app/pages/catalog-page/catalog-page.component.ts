import { Component, OnInit } from '@angular/core';
import { CatatlogBrandsService } from 'src/app/services/catalog/brands.service';
import { CatatlogCategoriesService } from 'src/app/services/catalog/categories.service';
import { CatalogFiltersService } from 'src/app/services/catalog/filters.sevice';
import { CatatlogMarkersService } from 'src/app/services/catalog/markers.service';
import { ProductBrands, ProductCategories, ProductFilter, ProductMarker } from 'src/app/shared/interfaces';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  productSortType = 'popular'
  productViewType = 'grid'
  productsCountToggle = false
  productsCount = 6
  productsPageLimits = [3, 6, 9, 12, 15]

  filtersToggle = true
  filtersPreview = true
  addedFilters: number[] = []
  filters: ProductFilter[] = []

  markersToggle = true
  addedMarkers: number[] = []
  markers: ProductMarker[] = this.markersService.getMarkers()

  brandsToggle = true
  addedBrands: number[] = []
  brands: ProductBrands[] = this.brandsService.getBrands()

  categoriesToggle = true
  addedCategories: number[] = []
  categories: ProductCategories[] = this.categoriesService.getCategories()

  constructor(
    public filtersService: CatalogFiltersService,
    public markersService: CatatlogMarkersService,
    public brandsService: CatatlogBrandsService,
    public categoriesService: CatatlogCategoriesService,
    private breadcrumbsService: BreadcrumbsService
  ) {
    console.log('catalog')
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
      {link: ['#'], title: 'Кошик'}
    ])
  }

  ngOnInit(): void {
    this.filtersService.loadItems()
      .subscribe((f: ProductFilter) => {
        this.filtersPreview = false
        this.filters = [...this.filtersService.defaultItems(), f]
      })
  }

  removeProductFilters(ids: number[], type: string) {
    switch(type) {
      case 'filters':
        this.addedFilters = this.filtersService.removeFilters(ids, this.addedFilters)
        break
      case 'markers':
        this.addedMarkers = this.filtersService.removeFilters(ids, this.addedMarkers)
        break
      case 'brands':
        this.addedBrands = this.filtersService.removeFilters(ids, this.addedBrands)
        break
      case 'categories':
        this.addedCategories = this.filtersService.removeFilters(ids, this.addedCategories)
        break
    }
  }

  selectProductFilter(id: number, type: string) {
    switch(type) {
      case 'filters':
        this.addedFilters = this.filtersService.selectFilter(id, this.addedFilters)
        break
      case 'markers':
        this.addedMarkers = this.filtersService.selectFilter(id, this.addedMarkers)
        break
      case 'brands':
        this.addedBrands = this.filtersService.selectFilter(id, this.addedBrands)
        break
      case 'categories':
        this.addedCategories = this.filtersService.selectFilter(id, this.addedCategories)
        break
    }
  }

  loadMarker(type: string) {
    switch(type) {
      case 'markers':
        this.markers = this.markersService.loadItem(this.markers)
        break
      case 'brands':
        this.brands = this.brandsService.loadItem(this.brands)
        break
      case 'categories':
        this.categories = this.categoriesService.loadItem(this.categories)
        break
    }
  }
}
