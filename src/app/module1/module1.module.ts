import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';

const routes: Routes = [
  { path: 'child1', component: Child1Component },
  { path: 'child2', component: Child2Component }
];

@NgModule({
  declarations: [Child1Component, Child2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Module1 { }