import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoznamProduktovComponent } from '../module-produkt/zoznam-produktov/zoznam-produktov.component';
import { ShoppingCartListComponent } from '../module-produkt/shopping-cart-list/shopping-cart-list.component';


const routes: Routes = [
       { path: '',
      title: 'Zoznam produktov',
    component: ZoznamProduktovComponent,  
  },  
  { path: 'shopping-cart',
  title: 'Shopping Cart',
component: ShoppingCartListComponent,  
},   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProductRoutingModule {}
  
