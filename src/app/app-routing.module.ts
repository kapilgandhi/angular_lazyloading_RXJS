import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'customer',
  loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
},
{
  path: 'product',
  loadChildren: () => import('./product/product.module').then(m => m.ProductModule)

},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
