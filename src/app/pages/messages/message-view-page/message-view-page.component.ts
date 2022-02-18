import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-message-view-page',
  templateUrl: './message-view-page.component.html',
  styleUrls: ['./message-view-page.component.scss']
})
export class MessageViewPageComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService

  ) { }

  ngOnInit(): void {
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
      {link: ['/messages'], title: 'Повідомлення'},
      {link: ['#'], title: 'Сповіщення 65465465454'}
    ])
  }

}
