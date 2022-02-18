import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
        {link: ['#'], title: 'Контакты'}
    ])
  }

}
