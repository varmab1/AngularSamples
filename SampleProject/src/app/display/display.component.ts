import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  rows:any[]= [];
  constructor() { }

  ngOnInit() {
  }

  addDateToTable(name:String,contact:String){
    this.rows.push({"name":name,"contact":contact})
  }
}
