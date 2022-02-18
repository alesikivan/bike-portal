import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreadCrumb } from 'src/app/shared/interfaces';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: [
    './profile-page.component.scss',
    '../orders-page/orders-page.component.scss'
  ]
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
      {link: ['/profile'], title: 'Ім’я Прізвище'}
    ])
  }

  ngOnInit(): void {
  }

}
