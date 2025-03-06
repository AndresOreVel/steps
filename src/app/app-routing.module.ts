import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path: 'start', component: ModalComponent},
  { path: '**', redirectTo: 'start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
