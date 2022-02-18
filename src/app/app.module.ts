import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { MessageViewPageComponent } from './pages/messages/message-view-page/message-view-page.component';
import { MessageCreatePageComponent } from './pages/messages/message-create-page/message-create-page.component';
import { MessageIndexPageComponent } from './pages/messages/message-index-page/message-index-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ComplaintsIndexPageComponent } from './pages/complaints/complaints-index-page/complaints-index-page.component';
import { ComplaintsCreatePageComponent } from './pages/complaints/complaints-create-page/complaints-create-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { PreviewComponent } from './shared/components/preview/preview.component';
import { NotificationsService } from './shared/services/notifications.service';
import { BreadcrumbsService } from './shared/services/breadcrumbs.service';


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    PostsPageComponent,
    CatalogPageComponent,
    ProductPageComponent,
    CartPageComponent,
    OrderPageComponent,
    OrdersPageComponent,
    ProfilePageComponent,
    ContactsPageComponent,
    MessageViewPageComponent,
    MessageCreatePageComponent,
    MessageIndexPageComponent,
    NotFoundPageComponent,
    ComplaintsIndexPageComponent,
    ComplaintsCreatePageComponent,
    NewsPageComponent,
    PreviewComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    NotificationsService,
    BreadcrumbsService,
    INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
