import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { WelcomeComponent } from './WelcomePage/welcome/welcome.component';
import { AboutMeComponent } from './aboutMe/about-me/about-me.component';
import { SearchComponent } from './Search/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ZoznamProduktovComponent } from './zoznam-produktov/zoznam-produktov.component';
import { HighlightDirective } from './Shared/directives/highligh.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    AboutMeComponent,
    SearchComponent,
    ProductComponent,
    ZoznamProduktovComponent,
    HighlightDirective,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
