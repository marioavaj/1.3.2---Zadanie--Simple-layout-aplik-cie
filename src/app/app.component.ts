import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './Services/authentication.service';
import { WelcomeComponent } from './WelcomePage/welcome/welcome.component';


    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
constructor(private isLogged: AuthenticationService){}

  ngOnInit(): void {
     if(localStorage.getItem('Dk4kdoSkf5*gjd') && localStorage.getItem('Dk4kdoSkf5*gjd') !=undefined){
        this.isLogged.isLogged(true);
     }

     if(localStorage.getItem('Dk4kdoSkf5*g5464jd') && localStorage.getItem('Dk4kdoSkf5*g5464jd') !=undefined){
         let userName = (localStorage.getItem('Dk4kdoSkf5*g5464jd'));
         console.log((localStorage.getItem('Dk4kdoSkf5*g5464jd')));
        this.isLogged.userNamefromLS(userName);
     }

  }
  title = 'Metis-Ondrejka';
  rootPage:any = WelcomeComponent;
}







