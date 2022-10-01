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
import {MatMenuModule} from '@angular/material/menu';
import {ModuleProduktModule} from './module-produkt/module-produkt.module';
import { RouterModule } from '@angular/router';
import { ModuleStatistikaModule } from './module-statistika/module-statistika.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingCartBadgeComponent } from './module-produkt/shopping-cart-badge/shopping-cart-badge.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

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
        ShoppingCartBadgeComponent

    ],
    imports: [
      RouterModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ModuleProduktModule,
        ModuleStatistikaModule,
        MatMenuModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTooltipModule   
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
