import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferencieComponent } from './referencie/referencie.component';
import { PrihlaskaComponent } from './prihlaska/prihlaska.component';
import { WelcomeComponent } from './WelcomePage/welcome/welcome.component';
import { ProductDetailComponent } from './module-produkt/product-detail/product-detail.component';
import { ZivotopisComponent } from './zivotopis/zivotopis.component';


const routes: Routes = [
  { path: '',
  title: 'Ondrejka',
   component: WelcomeComponent },
   { path: 'zoznam-produktov/:productId',
    title: 'Detail-produktu',
  component: ProductDetailComponent,  
},
  { path: 'referencie',
  title: 'Referencie',
   component: ReferencieComponent },
  { path: 'prihlaska',
  title: 'Prihláška',
   component: PrihlaskaComponent },

  { path: 'zoznam-produktov',
    title: 'Zoznam produktov',
  loadChildren:()=>import ('./module-produkt/module-produkt.module')
  .then(mod=>mod.ModuleProduktModule)
  
},
{ path: 'profil',
  title: 'Profil',
   component: ZivotopisComponent },

   { path: 'statistika',
   title: 'Štatistiky',
   loadChildren:()=>import ('./module-statistika/module-statistika.module')
   .then(mod=>mod.ModuleStatistikaModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
