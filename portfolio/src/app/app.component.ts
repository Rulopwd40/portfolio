import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimatedbuttonComponent } from './animatedbutton/animatedbutton.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    AnimatedbuttonComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  frontend = [
    { name: 'Angular', imageUrl: 'angular.svg' },
    { name: 'HTML5', imageUrl: 'html5.svg' },
    { name: 'Typescript', imageUrl: 'ts.svg' }
  ];

  backend = [
    { name: 'Java', imageUrl: 'java.svg' },
    { name: 'Springboot' , imageUrl:'springboot.svg'},
    { name: 'Hibernate', imageUrl:'hibernate.svg'},
    { name: 'C#', imageUrl: 'cs.svg'},
    { name: 'C++', imageUrl: 'c++.svg'}
  ]

  databases = [
    { name: 'PostgreSQL', imageUrl: 'postgresql.svg'},
    { name: 'SQLite', imageUrl: 'sqlite.svg'},
  ]

  miscellaneous = [
    { name:'Github', imageUrl:'github.svg'}
  ]

  projects = [
    { name:'StockSalesSystem' , 
      url:'https://github.com/Rulopwd40/StockSalesSystem', 
      description:'System made for product selling,stock management and stats reports',
      technology:'Java'}
  ]

}
