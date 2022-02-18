import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-complaints-index-page',
  templateUrl: './complaints-index-page.component.html',
  styleUrls: ['./complaints-index-page.component.scss']
})
export class ComplaintsIndexPageComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    this.breadcrumbsService.change([
      {link: ['/'], title: 'Велопортал'},
      {link: ['#'], title: 'Рекламація'}
    ])
  }

}
