import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
   
  public showColor: boolean = false;
  public showInfo = false;
  public caption = 'Show Text';
  public productList: Array<string> = ['IPhone','Galaxy 9.0', 'Blackberry'];
  constructor() { }

  ngOnInit(): void {
  }
  public changeColor() : void {
    this.showColor = !this.showColor;
  }

  public changeData(): void {
    this.showInfo = !this.showInfo;
    if(this.showInfo){
      this.caption = 'Hide Text';
    }else{
      this.caption = 'Show Text';
    }
  }

}
