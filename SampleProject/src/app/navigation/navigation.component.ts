import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  text: String="login"
  constructor() { }

  ngOnInit() {
  }
  onsubmit(){
    this.text= (this.text=="login")?"logut":"login";
  }

}
