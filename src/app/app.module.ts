import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { WelcomeComponent } from './WelcomePage/welcome/welcome.component';
import { AboutMeComponent } from './aboutMe/about-me/about-me.component';
import { SearchComponent } from './Search/search/search.component';
import { ProductComponent } from './product/product.component';
import { ZoznamProduktovComponent } from './zoznam-produktov/zoznam-produktov.component';
import { HighlightDirective } from './Shared/directives/highligh.directive';
import { FilterComponent } from './filter/filter.component';
import { FilterOptionComponent } from './filter-option/filter-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';


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
    FilterComponent,
    FilterOptionComponent,
    ProductDetailComponent,

     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
