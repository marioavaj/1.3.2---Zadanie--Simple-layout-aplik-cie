import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferencieComponent } from './referencie/referencie.component';
import { PrihlaskaComponent } from './prihlaska/prihlaska.component';
import { WelcomeComponent } from './WelcomePage/welcome/welcome.component';
import { ZoznamProduktovComponent } from './zoznam-produktov/zoznam-produktov.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '',
  title: 'Ondrejka',
   component: WelcomeComponent },
  { path: 'referencie',
  title: 'Referencie',
   component: ReferencieComponent },
  { path: 'prihlaska',
  title: 'Prihláška',
   component: PrihlaskaComponent },
  { path: 'zoznam-produktov',
    title: 'Zoznam produktov',
  component: ZoznamProduktovComponent,
  children: [
    {
      path: 'product-template', // child route path
      component: ProductComponent, // child route component that the router renders
    },

],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
