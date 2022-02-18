import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-message-create-page',
  templateUrl: './message-create-page.component.html',
  styleUrls: ['./message-create-page.component.scss']
})
export class MessageCreatePageComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
      {link: ['/messages'], title: 'Повідомлення'},
      {link: ['#'], title: 'Кошик'}
    ])
  }

}
