import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'admin-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[];

  constructor(private router: Router) {
    this.menu = [
      {
        label: "Пользователи",
        items: [
          {
            routerLink: ['/admin', 'user', 'index'],
            label: "Просмотреть все"
          },
          {
            routerLink: ['/admin', 'user', 'create'],
            label: "Создать"
          }
        ],
      },
      {
        label: "HTML",
        items: [
          {
            label: "HTML 1",
          },
          {
            label: "HTML 2",
          },
        ],
      }
    ]
  }

  ngOnInit(): void {
  }

}
