import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {

  constructor(protected modalComponent: ModalComponent){}

  updatePrice(){
    if(this.modalComponent.isYearly){
      this.modalComponent.plans.forEach(plan => plan.price = plan.price * 10);
    }else{
      this.modalComponent.plans.forEach(plan => plan.price = plan.price / 10);
    }
  }

  nextStep(){
    this.modalComponent.nextStep();
  }

  prevStep(){
    this.modalComponent.prevStep();
  }
}
