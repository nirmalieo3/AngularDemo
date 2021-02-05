import { Component, ViewChild , ViewEncapsulation } from '@angular/core';
import {SecondChildComponent} from './second-child/second-child.component';
import {ModelComponent } from './model/model.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
 
})
export class AppComponent {
  public caption:string = 'Custom Model';
  @ViewChild('modal', {static:true}) public_ctrModel:ModelComponent;
    
  showInfo: boolean = false;
  cap: string = 'Show Text';
  public changeData():void {
    this.showInfo = !this.showInfo;
    if (this.showInfo){
       this.cap = 'Hide Text';
    }else{
      this.cap = 'Show Text'
    }
  }
  productList: Array<string> = ['IPhone', 'Galaxy 9','Blackberry 10z'];

  studentList: Array<any> = new Array<any>();
  public message: string = 'Sample Demostration of Attribute Directives using Custom Directives'
  public color: string ='blue';
  public result:string = '';
  @ViewChild(SecondChildComponent, {static:true}) private_calculator : SecondChildComponent;
  constructor(){}
  ngOnInit() {
    this.studentList = [
            { SrlNo: 1, Name: 'Rajib Basak', Course: 'Bsc(Hons', Grade: 'A',},
            { SrlNo: 2, Name: 'Rajib Basak1', Course: 'BA', Grade: 'B' },  
            { SrlNo: 3, Name: 'Rajib Basak2', Course: 'BCom', Grade: 'A' },  
            { SrlNo: 4, Name: 'Rajib Basak3', Course: 'Bsc-Hons', Grade: 'C' },  
            { SrlNo: 5, Name: 'Rajib Basak4', Course: 'MBA', Grade: 'B' },  
            { SrlNo: 6, Name: 'Rajib Basak5', Course: 'MSc', Grade: 'B' },  
            { SrlNo: 7, Name: 'Rajib Basak6', Course: 'MBA', Grade: 'A' },  
            { SrlNo: 8, Name: 'Rajib Basak7', Course: 'MSc.', Grade: 'C' },  
            { SrlNo: 9, Name: 'Rajib Basak8', Course: 'MA', Grade: 'D' },  
            { SrlNo: 10, Name: 'Rajib Basak9', Course: 'B.Tech', Grade: 'A' }  
    ];
  }
  public add(value: number): void{
    this.result = 'Result of Addition ' + value;
  }
  public subtract(value: number): void{
    this.result = 'Result of subtraction ' + value;
  }
  public multiply(value: number): void{
    this.result = 'Result of multiplication ' + value;
  }
  public divide(value: number): void{
    this.result = 'Result of division ' + value;
  }
  public reset(): void{
    this.result = '';
    this.private_calculator.clear();
  }

  public fnOpenModal(): void {
    this.public_ctrModel.showModal();
  }
  public fnHideModal(): void {  
    this.public_ctrModel.close();  
}  
}
