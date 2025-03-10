import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrl: './step4.component.css'
})
export class Step4Component {
  constructor(
    protected appComponent: AppComponent,
    private router: Router
  ){}
  
  prevStep(){
    this.appComponent.prevStep();
  }

  getPlanBilling(): string{
    return this.appComponent.isYearly ? '/yr' : '/mo';
  }

  confirm(){
    this.router.navigate(['/thankyou']);
  }
}
