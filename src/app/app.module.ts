import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: 'module1', 
    loadChildren: () => import('./module1/module1.module').then(m => m.Module1) 
  },
  { 
    path: 'module2', 
    loadChildren: () => import('./module2/module2.module').then(m => m.Module2) 
  },
  { path: '', redirectTo: '/module1', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }