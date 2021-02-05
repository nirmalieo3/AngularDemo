import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
   @Input() public display: string = 'none';
   @Input('header-caption') public header: string = 'Modal';
  constructor() { }
ì
  ngOnInit(): void {
  }
  public fnClose(): void {
    this.display ='none';
  }
  showModal(): void {
    this.display ='block';
  }
  close():void {
    this.fnClose();
  }
  setModelTitle(args: string): void {
    this.header = args;
  }
}
