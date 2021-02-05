import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {
    public firstNumber: number = 0;
    public secondNumber: number = 0;
    public result: number = 0;
    @Output() public addNumber: EventEmitter<number> = new EventEmitter<number>();
    @Output() public subtractNumber: EventEmitter<number> = new EventEmitter<number>();
    @Output() public multiplyNumber: EventEmitter<number> = new EventEmitter<number>();
    @Output() public divideNumber: EventEmitter<number> = new EventEmitter<number>();
  
    constructor() { }

  ngOnInit(): void {
    
  }

  public add(): void {
    this.result = this.firstNumber + this.secondNumber;
    this.addNumber.emit(this.result);
  }
  public subtract(): void {
    this.result = this.firstNumber - this.secondNumber;
    this.subtractNumber.emit(this.result);
  }
  public multiply(): void {
    this.result = this.firstNumber * this.secondNumber;
    this.multiplyNumber.emit(this.result);
  }
  public divide(): void {
    this.result = this.firstNumber / this.secondNumber;
    this.divideNumber.emit(this.result);
  }
  public clear(): void {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
  }

}
