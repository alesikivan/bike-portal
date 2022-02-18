import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
      {link: ['/orders'], title: 'Замовлення'},
      {link: ['#'], title: 'Замовлення 654654654654'}
    ])
  }

}
