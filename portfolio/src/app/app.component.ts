import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimatedbuttonComponent } from './animatedbutton/animatedbutton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    AnimatedbuttonComponent,
    CommonModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  
  me = {
    image: "me-image.jpg",
  };

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
      technology:'Java'},

    { name: 'AppointmentsManagementSystem',
      url:'https://github.com/Rulopwd40/appms',
      description:'System for appointments creation and management',
      technology:'C# ASP.NET'
    },
    {
      name: 'ProjectKanban',
      url:'https://github.com/Rulopwd40/ProjectKanban',
      description:'A Kanban with drag & drop with Devs cards and taskcards',
      technology:'Angular'
    }
  ]

  languages = [
    { name: 'Spanish', level: 'Native', imageUrl:'spanish.png'},
    { name: 'English', level: 'Upper Intermediate', imageUrl:'english.svg' },
    { name: 'German', level: 'Beginner', imageUrl:'deutsch.svg'}
  ]

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(section);
      const headerOffset = 100; // Ajusta este valor según la altura de tu encabezado
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}