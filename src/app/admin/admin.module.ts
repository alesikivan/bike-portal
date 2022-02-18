import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/layouts/admin-layout/admin-layout.component";
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "../shared/services/auth.guard";
import { UserIndexComponent } from "./pages/user/user-index/user-index.component";
import { UserViewComponent } from "./pages/user/user-view/user-view.component";
import { UserService } from "./services/user.service";

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { TieredMenuModule } from "primeng/tieredmenu";
import { MenuModule } from "primeng/menu";

import { UserCreateComponent } from "./pages/user/user-create/user-create.component";
import { MenuComponent } from './shared/components/menu/menu.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
      {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
      {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
      {path: 'user', children: [
        {path: '', redirectTo: '/user/index', pathMatch: 'full'},
        {path: 'index', component: UserIndexComponent, canActivate: [AuthGuard]},
        {path: 'view/:id', component: UserViewComponent, canActivate: [AuthGuard]},
        {path: 'create', component: UserCreateComponent, canActivate: [AuthGuard]},
        {path: 'update/:id', component: UserCreateComponent, canActivate: [AuthGuard]},
      ]},
    ]
  }
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardPageComponent,
    LoginPageComponent,
    EditPageComponent,
    CreatePageComponent,
    UserIndexComponent,
    UserViewComponent,
    UserCreateComponent,
    MenuComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    TableModule,
    CalendarModule,
    ButtonModule,
    SliderModule,
    MenuModule,
    TieredMenuModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserService
  ]
})

export class AdminModule {}
