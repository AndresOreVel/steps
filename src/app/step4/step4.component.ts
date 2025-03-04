import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrl: './step4.component.css'
})
export class Step4Component {
  constructor(protected modalComponent: ModalComponent){}
  
  prevStep(){
    this.modalComponent.prevStep();
  }

  getPlanBilling(): string{
    return this.modalComponent.isYearly ? '/yr' : '/mo';
  }

  confirm(){
    this.modalComponent.nextStep();
  }
}
