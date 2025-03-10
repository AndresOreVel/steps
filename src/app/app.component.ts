import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppMenu } from './clases/app-menu';
import { AppMenuService } from './clases/app-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'step';
  menu!: AppMenu;

  currentStep = 0;
  step1Completed = false;

  selectedPlan = 'Arcade';
  isYearly = false;
  selectedAddons: { name: string; price: number }[] = [];
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

  constructor(
    private navigationService: AppMenuService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menu = this.navigationService.getMenu();
    this.updateAddons();
    this.calculateTotal();

    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      const foundIndex = this.menu.items.findIndex(item => item.route === currentUrl);
      if(foundIndex !== -1){
        this.currentStep = foundIndex;
      }
    });
  }

  markStep1Completed(isValid: boolean) {
    this.step1Completed = isValid;
    this.cdRef.detectChanges();
  }

  nextStep() {
    if (this.currentStep < this.menu.items.length -1) {
      this.currentStep++;
      this.router.navigate([this.menu.items[this.currentStep].route]);
      this.updateAddons();
      this.calculateTotal();
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.router.navigate([this.menu.items[this.currentStep].route]);
    }
  }

  goToStep(stepIndex: number) {
    if (stepIndex === 0 || this.step1Completed) {
      this.currentStep = stepIndex;
      this.router.navigate([this.menu.items[stepIndex].route]);
      this.updateAddons();
      this.calculateTotal();
    }
  }

  getPlanPrice(): number {
    const plan = this.plans.find(p => p.name === this.selectedPlan);
    return plan?.price || 0;
  }

  updateAddons() {
    let addonsSelected = [];

    for (let addon of this.addons) {
      if (addon.selected) {
        let newPrice = addon.price;

        if (this.isYearly) {
          newPrice *= 10;
        }

        addonsSelected.push({ name: addon.name, price: newPrice });
      }
    }

    this.selectedAddons = addonsSelected;

    this.calculateTotal();
  }

  calculateTotal() {
    let addonsTotal = 0;

    for (let addon of this.selectedAddons) {
      addonsTotal += addon.price;
    }

    this.total = this.getPlanPrice() + addonsTotal;
  }

  updatePlan(plan: string) {
    this.selectedPlan = plan;
    this.calculateTotal();
  }
}
