import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './Header/header/header.component';
import {FooterComponent} from './Footer/footer/footer.component';
import {WelcomeComponent} from './WelcomePage/welcome/welcome.component';
import {AboutMeComponent} from './aboutMe/about-me/about-me.component';
import {SearchComponent} from './Search/search/search.component';
import {HighlightDirective} from './Shared/directives/highligh.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ZivotopisComponent} from './zivotopis/zivotopis.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {StatistikaComponent} from './statistika/statistika.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {ModuleProduktModule} from './module-produkt/module-produkt.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        WelcomeComponent,
        AboutMeComponent,
        SearchComponent,
        HighlightDirective,
        ZivotopisComponent,
        StatistikaComponent,


    ],
    imports: [
      RouterModule,
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
        MatCheckboxModule,
        MatRadioModule,
        ModuleProduktModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
