import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      h3 {
        padding: 20px;
        background-color: mistyrose;
        color: red;
        border: 1px solid red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
