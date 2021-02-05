import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public formData: any= {};
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  password = new FormControl('',[
    Validators.required,
    hasExclamationMark
  ]);
  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  })
  public showMessage: boolean = false;
  constructor(public builder: FormBuilder) { }

  ngOnInit(): void {
  }
 
  registerUser(){
    this.formData = this.loginForm.value;
    this.showMessage = true;
  }

}
function hasExclamationMark(input: FormControl) {
  const hasExclamation = input.value.indexOf('!') >= 0 ;
  return hasExclamation ? null : {needsExclamation: true};
}