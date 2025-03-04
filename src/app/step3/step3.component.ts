import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {

  constructor(protected modalComponent: ModalComponent){}

  getAddonPrice(price: number): string{
    return this.modalComponent.isYearly ? `+$${price * 10}/yr` : `+$${price}/mo`;
  }

  toggleAddon(addon: any, event: MouseEvent){
    if(!(event.target instanceof HTMLInputElement)){
      addon.selected = !addon.selected;
    }
  }

  nextStep(){
    this.modalComponent.updateAddons();
    this.modalComponent.nextStep();
  }

  prevStep(){
    this.modalComponent.prevStep();
  }
}
