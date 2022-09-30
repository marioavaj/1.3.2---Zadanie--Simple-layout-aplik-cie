import { Component } from '@angular/core';
import { WelcomeComponent } from './WelcomePage/welcome/welcome.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Metis-Ondrejka';
  rootPage:any = WelcomeComponent;
}
