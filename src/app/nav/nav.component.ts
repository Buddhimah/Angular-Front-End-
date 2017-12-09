import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  isCPActive="";
  isHActive="";
  constructor(){

  }
  ngOnInit() {
    this.isCPActive="";
    this.isHActive="active";
    
  }
  
    liClicked($event){
      
      this.isCPActive="active";
      this.isHActive="";
      
    }

}
