import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  writeUsToggle = false
  filesToggle = false
  menuToggle = true
  w = window.screen.availWidth
  mouseMoveHandler: any

  hideMenu() {
    if (this.w < 1080) {
      this.menuToggle = false
    }
  }

  toggleMenu() {
    this.menuToggle = !this.menuToggle
  }

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {
  }

}
