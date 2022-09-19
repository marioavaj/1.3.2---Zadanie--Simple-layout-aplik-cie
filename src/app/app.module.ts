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
import { ZivotopisComponent } from './zivotopis/zivotopis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { StatistikaComponent } from './statistika/statistika.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
    ZivotopisComponent,
    StatistikaComponent,
    
      
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule, 
    MatSortModule,
    MatCardModule,  
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
