import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPage} from './component/main.page';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
