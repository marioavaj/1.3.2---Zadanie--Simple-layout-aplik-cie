import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatistikaComponent } from '../module-statistika/statistika/statistika.component';


const routes: Routes = [
       { path: '',
      title: 'Štatistika',
    component: StatistikaComponent
  },    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class StatistikaRoutingModule {}
  
