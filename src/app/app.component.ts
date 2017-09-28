// Main component of the application
import { Component } from '@angular/core';
 
@Component({
  // Under <router-outlet> tag, called component will be displayed
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}