import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animatedbutton',
  standalone: true,
  imports: [],
  templateUrl: './animatedbutton.component.html',
  styleUrl: './animatedbutton.component.scss'
})
export class AnimatedbuttonComponent {
  @Input() text: string = '';

}
