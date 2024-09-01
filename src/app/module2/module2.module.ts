import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Child3Component } from './child3.component';
import { Child4Component } from './child4.component';

const routes: Routes = [
  { path: 'child3', component: Child3Component },
  { path: 'child4', component: Child4Component }
];

@NgModule({
  declarations: [Child3Component, Child4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Module2 { }