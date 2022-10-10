import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoznamProduktovComponent } from '../module-produkt/zoznam-produktov/zoznam-produktov.component';
import { ShoppingCartListComponent } from '../module-produkt/shopping-cart-list/shopping-cart-list.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';


const routes: Routes = [
       { path: '',
      title: 'Zoznam produktov',
    component: ZoznamProduktovComponent,
  },
  { path: 'shopping-cart',
  title: 'Shopping Cart',
component: ShoppingCartListComponent,
},
{ path: 'new-product-form',
  title: 'New product',
component: NewProductFormComponent,
},

  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProductRoutingModule {}

