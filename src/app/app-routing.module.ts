import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReferencieComponent } from './referencie/referencie.component';
import { PrihlaskaComponent } from './prihlaska/prihlaska.component';
import { WelcomeComponent } from './WelcomePage/welcome/welcome.component';
import { ZoznamProduktovComponent } from './zoznam-produktov/zoznam-produktov.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'Referencie', component: ReferencieComponent },
  { path: 'Prihlaska', component: PrihlaskaComponent },
  { path: 'Zoznam-produktov', component: ZoznamProduktovComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
