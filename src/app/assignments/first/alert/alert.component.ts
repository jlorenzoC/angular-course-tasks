import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <h1 [style.backgroundColor]="backgroundColor" [style.color]="color">
      {{ text }}!!!
    </h1>
  `,
  styles: [
      `
      h1 {
        text-align: center;
        padding: 15px;
        border-radius: 5px;
      }
    `,
  ],
})
export class AlertComponent {
  @Input() text: string;
  @Input() color: string;
  @Input() backgroundColor: string;
}
