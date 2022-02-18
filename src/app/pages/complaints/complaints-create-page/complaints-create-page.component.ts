import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-complaints-create-page',
  templateUrl: './complaints-create-page.component.html',
  styleUrls: ['./complaints-create-page.component.scss']
})
export class ComplaintsCreatePageComponent implements OnInit {

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    this.breadcrumbsService.change([
      {link: ['/complaints'], title: 'Рекламація'},
      {link: ['#'], title: 'Нова рекламація'}
    ])
  }

}
