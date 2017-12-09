import { Component, OnInit } from '@angular/core';
import {NavComponent} from '../nav/nav.component';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title="QMS";
  constructor() { }

  ngOnInit() {
  }

}
