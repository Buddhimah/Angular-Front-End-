import { Component } from '@angular/core';
import {NavComponent } from './nav/nav.component';
import {RegComponent} from './reg/reg.component';
import {WelcomeComponent} from './welcome/welcome.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QMS';
}
