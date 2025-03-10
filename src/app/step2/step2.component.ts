import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {

  constructor(
    protected appComponent: AppComponent,
  ){}

  updatePrice(){
    if(this.appComponent.isYearly){
      this.appComponent.plans.forEach(plan => plan.price = plan.price * 10);
    }else{
      this.appComponent.plans.forEach(plan => plan.price = plan.price / 10);
    }
  }

  nextStep(){
    this.appComponent.nextStep();
  }

  prevStep(){
    this.appComponent.prevStep();
  }
}
