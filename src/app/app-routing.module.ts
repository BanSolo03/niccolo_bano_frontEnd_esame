import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './pages/component1/component1.component';
import { Component2Component } from './pages/component2/component2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'component1',
    pathMatch: 'full'
  },
  {
    path: 'component1',
    component: Component1Component
  },
  {
    path: 'component2',
    component: Component2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
