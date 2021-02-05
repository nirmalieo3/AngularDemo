import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css', '../custom.css']
})
export class ChildComponent implements OnInit {
    
   @Input() public message :string = '';
   @Input('alert-pop') public message1 :string= '';
   @Output() onSignup = new EventEmitter<any>();
   public data: any={};
   public onSubmit() :void{
     this.onSignup.emit(this.data);
   }
    public showAlert() :void{
      alert(this.message1);
    }
  
  constructor() { }

  ngOnInit(): void {
  }

}
