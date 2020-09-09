import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomerComponent
      },
      {
        path: 'client',
        component: ClientComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
