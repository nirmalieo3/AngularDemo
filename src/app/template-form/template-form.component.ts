import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css','../custom.css']
})
export class TemplateFormComponent implements OnInit {
    public formData: any ={};
    public showMessage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  registerUser(formData: NgForm){
     this.formData = formData.value;
     this.showMessage = true;
  }

}
