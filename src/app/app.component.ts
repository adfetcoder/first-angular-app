import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      .after5Log {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  showDetails = false;
  log = [];

  toggleDetails() {
    this.showDetails = !this.showDetails;
    // this.log.push(this.log.length + 1);
    // push timestamp instead
    this.log.push(new Date());
  }

  getBackgroundColor(logItem) {
    return logItem >= 5 ? 'blue' : 'transparent';
  }
}
