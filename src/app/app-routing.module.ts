import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';

const routes: Routes = [
  {path: '', component: CustomerInformationComponent},
  {path: 'customer-info', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
