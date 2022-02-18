import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    NotificationsComponent,
    BreadcrumbsComponent,
  ],
  declarations: [
    NotificationsComponent,
    BreadcrumbsComponent
  ],

})

export class SharedModule {

}
