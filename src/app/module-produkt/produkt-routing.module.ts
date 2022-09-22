import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoznamProduktovComponent } from '../module-produkt/zoznam-produktov/zoznam-produktov.component';


const routes: Routes = [
       { path: '',
      title: 'Zoznam produktov',
    component: ZoznamProduktovComponent,  
  },    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProductRoutingModule {}
  
