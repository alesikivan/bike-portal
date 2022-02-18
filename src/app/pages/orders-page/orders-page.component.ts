import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) {
    console.log('orders')
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
      {link: ['/orders'], title: 'Замовлення'}
    ])
  }

  ngOnInit(): void {
  }

}
