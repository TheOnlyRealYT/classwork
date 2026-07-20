import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  num:number = 0;
  str:string = "";
  public onButtonClick(){
    this.num++;
  }
}
