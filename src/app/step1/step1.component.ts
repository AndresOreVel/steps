import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css'
})
export class Step1Component implements OnInit{
  userInfo = {
    name: '',
    email: '',
    phone: ''
  };

  isStep1Valid = false;

  constructor(
    private modalComponent: ModalComponent,
    private cdRef: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.userInfo.name = localStorage.getItem('name') || '';
    this.userInfo.email = localStorage.getItem('email') || '';
    this.userInfo.phone = localStorage.getItem('phone') || '';

    this.updateFormStatus();
  }

  isValidName(): boolean{
    return this.userInfo.name != null && this.userInfo.name.trim().length >= 3;
  }

  isValidEmail():boolean{
    return this.userInfo.email != null && this.userInfo.email.includes('@');
  }

  isValidPhone():boolean{
    return this.userInfo.phone != null && this.userInfo.phone.trim().length >=8;
  }

  isFormValid():boolean{
    return this.isValidName() && this.isValidEmail() && this.isValidPhone();
  }

  updateFormStatus():void {
    this.isStep1Valid = this.isFormValid();
    this.modalComponent.markStep1Completed(this.isFormValid());

    this.cdRef.detectChanges();
  }

  nextStep(){
    if(this.isFormValid()){
      localStorage.setItem('name', this.userInfo.name);
      localStorage.setItem('email', this.userInfo.email);
      localStorage.setItem('phone', this.userInfo.phone);
      
      this.modalComponent.nextStep();
    }
  }
}
