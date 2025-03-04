import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { Step1Component } from './step1/step1.component';

const routes: Routes = [
  { path: 'start', component: ModalComponent},
  { path: 'step1', component: Step1Component },
  { path: '**', redirectTo: 'start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
