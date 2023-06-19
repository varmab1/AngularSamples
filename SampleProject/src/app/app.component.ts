import { Component,AfterViewInit,ViewChild } from '@angular/core';
import {DisplayComponent} from './display/display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
 // @ViewChild('child') child:DisplayComponent;
  title = 'SampleProject';
  sendToChild(newItem:string){
      this.title = newItem;
  }
  ngAfterViewInit(): void {
   //   this.child.addDateToTable("","");
  }
}
