import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ComplaintsCreatePageComponent } from './pages/complaints/complaints-create-page/complaints-create-page.component';
import { ComplaintsIndexPageComponent } from './pages/complaints/complaints-index-page/complaints-index-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MessageCreatePageComponent } from './pages/messages/message-create-page/message-create-page.component';
import { MessageIndexPageComponent } from './pages/messages/message-index-page/message-index-page.component';
import { MessageViewPageComponent } from './pages/messages/message-view-page/message-view-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'post/:id', component: PostPageComponent},
      {path: 'posts', component: PostsPageComponent},
      {path: 'catalog', component: CatalogPageComponent},
      {path: 'product/:id', component: ProductPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'orders', component: OrdersPageComponent},
      {path: 'order/:id', component: OrderPageComponent},
      {path: 'contacts', component: ContactsPageComponent},
      {path: 'messages', children: [
        {path: '', redirectTo: '/messages/index', pathMatch: 'full'},
        {path: 'index', component: MessageIndexPageComponent},
        {path: 'create', component: MessageCreatePageComponent},
        {path: 'view/:id', component: MessageViewPageComponent},
      ]},
      {path: 'complaints', children: [
        {path: '', redirectTo: '/complaints/index', pathMatch: 'full'},
        {path: 'index', component: ComplaintsIndexPageComponent},
        {path: 'create', component: ComplaintsCreatePageComponent},
      ]},
      {path: 'profile', component: ProfilePageComponent},
      {path: 'news', component: NewsPageComponent},

      {path: '**', pathMatch: 'full', component: NotFoundPageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
