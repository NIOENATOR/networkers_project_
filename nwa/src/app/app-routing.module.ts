import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { NwjComponent } from './routes/nwj/nwj.component';
import { Page404Component } from './routes/page404/page404.component';
import { WnwComponent } from './routes/wnw/wnw.component';

const routes: Routes = [

  {path: "", pathMatch: "full", redirectTo: "/home"},

  {path: "home", component: HomeComponent},
  {path: "nwj", component: NwjComponent},
  {path: "wnw", component: WnwComponent},

  {path: "''", component: Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
