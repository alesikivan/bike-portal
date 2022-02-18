import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-message-index-page',
  templateUrl: './message-index-page.component.html',
  styleUrls: ['./message-index-page.component.scss']
})
export class MessageIndexPageComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
      {link: ['#'], title: 'Повідомлення'}
    ])
  }

  ngOnInit(): void {
  }

}
