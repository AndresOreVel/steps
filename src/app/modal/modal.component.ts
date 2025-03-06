import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  currentStep = 0;
  step1Completed = false;

  steps = [
    { name: 'Your Info', route: 'step1' },
    { name: 'Select Plan', route: 'step2' },
    { name: 'Add-ons', route: 'step3' },
    { name: 'Summary', route: 'step4' }
  ];

  selectedPlan = 'Arcade';
  isYearly = false;
  selectedAddons: { name: string; price: number}[] = [];
  total = 0;

  plans = [
    { name: 'Arcade', price: 9 },
    { name: 'Advanced', price: 12 },
    { name: 'Pro', price: 15 }
  ];

  addons = [
    { name: 'Online Service', description: 'Acces to multiplayer games', price: 1, selected: false },
    { name: 'Larger Storage', description: 'Extra 1TB cloud save', price: 2, selected: false },
    { name: 'Customizable Profile ', description: 'Custom theme on your profile', price: 2, selected: false }
  ];

  constructor(private cdRef: ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(): void {
    console.log('Steps:', this.steps);
    console.log('Current Step:', this.currentStep);
    this.updateAddons();
    this.calculateTotal();
  }

  markStep1Completed(isValid:boolean){
    this.step1Completed = isValid;
    this.cdRef.detectChanges();
  }

  nextStep(){
    if(this.currentStep < 4){
      this.currentStep++;
      this.updateAddons();
      this.calculateTotal();
    }
  }

  prevStep(){
    if(this.currentStep > 0){
      this.currentStep--;
    }
  }

  goToStep(stepIndex: number){
    console.log('Intentando ir al step:', stepIndex);
    if(stepIndex === 0 || this.step1Completed){
      this.router.navigate([`/start/${this.steps[stepIndex].route}`]);
      this.currentStep = stepIndex;
      this.updateAddons();
      this.calculateTotal();
    }
  }

  getPlanPrice(): number{
    const plan = this.plans.find(p => p.name === this.selectedPlan);
    return plan?.price || 0;
  }

  updateAddons(){
    let addonsSelected = [];

    for (let addon of this.addons){
      if(addon.selected){
        let newPrice = addon.price;

        if(this.isYearly){
          newPrice *= 10;
        }

        addonsSelected.push({ name: addon.name, price: newPrice });
      }
    }

    this.selectedAddons = addonsSelected;

    this.calculateTotal();
  }

  calculateTotal(){
    let addonsTotal = 0;

    for (let addon of this.selectedAddons){
      addonsTotal += addon.price;
    }

    this.total = this.getPlanPrice() + addonsTotal;
  }

  updatePlan(plan: string){
    this.selectedPlan = plan;
    this.calculateTotal();
  }
}
