import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { FunComponent } from './fun/fun.component';
import { OverlayComponent } from './overlay/overlay.component';
import {CommonModule} from "@angular/common";
import {routingComponents} from "./app-routing/app-routing.module";
import { ContactComponent } from './contact/contact.component';
import {DataService} from "./allservices.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    FunComponent,
    OverlayComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    CommonModule,
    routingComponents
  ],
  providers: [DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
