import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {

  constructor(
    protected appComponent: AppComponent
  ){}

  getAddonPrice(price: number): string{
    return this.appComponent.isYearly ? `+$${price * 10}/yr` : `+$${price}/mo`;
  }

  toggleAddon(addon: any, event: MouseEvent){
    if(!(event.target instanceof HTMLInputElement)){
      addon.selected = !addon.selected;
    }
  }

  nextStep(){
    this.appComponent.updateAddons();
    this.appComponent.nextStep();
  }

  prevStep(){
    this.appComponent.prevStep();
  }
}
