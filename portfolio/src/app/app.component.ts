import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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

}
