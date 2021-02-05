import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public val: string = "This is popup message";
  public msg: string = "Hello input decorator"

  public onSignup (data:any): void{
    let strMsg = "Thank you for signing up" + data.name +".";
    strMsg += "Email Id" + data.email + " has been registered successfuly";
    alert(strMsg);
  }

  public showInfo: boolean = false;
  public caption: string = 'Show Text';

  constructor() { }
  ngOnInit(): void {
  }
 
 }
