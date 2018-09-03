import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menudemo',
  templateUrl: './menudemo.component.html',
  styleUrls: ['./menudemo.component.css']
})
export class MenudemoComponent implements OnInit {
  sanju=true;
close(){
this.sanju=!this.sanju;
 
}

open(){
  this.sanju=!this.sanju;
}
  constructor() { }

  ngOnInit() {
  }

}
