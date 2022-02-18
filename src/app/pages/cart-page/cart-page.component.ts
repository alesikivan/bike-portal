import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
      {link: ['#'], title: 'Кошик'}
    ])
  }

  ngOnInit(): void {
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
      {link: ['#'], title: 'Кошик'}
    ])
  }

}
