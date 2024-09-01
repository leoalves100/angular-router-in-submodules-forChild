import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Rotas em Módulos Filhos</h1>
    <nav>
      <a routerLink="/module1/child1">Module1 Child1</a> |
      <a routerLink="/module1/child2">Module1 Child2</a> |
      <a routerLink="/module2/child3">Module2 Child3</a> |
      <a routerLink="/module2/child4">Module2 Child4</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }