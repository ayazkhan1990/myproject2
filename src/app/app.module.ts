import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { MyindexComponent } from './myindex/myindex.component';
import { HeaderComponent } from './header/header.component';
import { RformComponent } from './rform/rform.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { UiComponent } from './ui/ui.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes=[
  {path:'', component: HomeComponent},
  {path:'myindex', component: MyindexComponent},
  {path:'contact', component: ContactComponent},
  {path:'product', component: ProductComponent},
  {path:'about', component: AboutComponent},
  {path:'rform', component: RformComponent},
  {path:'ui', component: UiComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LeftsidebarComponent,
    MyindexComponent,
    HeaderComponent,
    RformComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    HomeComponent,
    UiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
