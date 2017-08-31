import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {AboutComponent} from "../about/about.component";
import {BlogComponent} from "../blog/blog.component";
import {FunComponent} from "../fun/fun.component";
import {ContactComponent} from "../contact/contact.component";

/*export class AppRoutingModule { }*/

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'fun',
    component: FunComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

/*@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
 })
 export class RoutingRoutingModule { }*/

export const routingComponents = RouterModule.forRoot(routes);
