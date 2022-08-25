import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReferencieComponent } from './referencie/referencie.component';
import  { PrihlaskaComponent} from './prihlaska/prihlaska.component';
import { WelcomeComponent } from './WelcomePage/welcome/welcome.component';

const routes: Routes = [
{path: '', component: WelcomeComponent },
{path: 'Referencie', component: ReferencieComponent},
{path: 'Prihlaska', component: PrihlaskaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

