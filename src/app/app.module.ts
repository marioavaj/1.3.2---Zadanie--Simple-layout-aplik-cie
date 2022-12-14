import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { WelcomeComponent } from './WelcomePage/welcome/welcome.component';
import { AboutMeComponent } from './aboutMe/about-me/about-me.component';
import { SearchComponent } from './Search/search/search.component';
import { HighlightDirective } from './Shared/directives/highligh.directive';
import { FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ZivotopisComponent } from './zivotopis/zivotopis.component';
import { MatMenuModule } from '@angular/material/menu';
import { ModuleProduktModule } from './module-produkt/module-produkt.module';
import { RouterModule } from '@angular/router';
import { ModuleStatistikaModule } from './module-statistika/module-statistika.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingCartBadgeComponent } from './module-produkt/shopping-cart-badge/shopping-cart-badge.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ZamestnanciComponent } from './zamestnanci/zamestnanci.component';
import { StructuralComponent } from './structural/structural.component';
import { ShowNewHead } from './Shared/directives/showNewHead.directives';
import { Hidden } from './Shared/directives/hidden.directive';
import { FooterComponent } from './Footer/footer/footer.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalAddEditProductComponent } from './modal-window/ModalAddEditProduct/modal-add-edit-product/modal-add-edit-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalLogInComponent } from './modal-window/ModalLogiIn/modal-log-in/modal-log-in.component';
import { ModalLogOutComponent } from './modal-window/ModalLogOut/modal-log-out/modal-log-out.component';

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
        ShoppingCartBadgeComponent,
        ZamestnanciComponent,
        StructuralComponent,
        ShowNewHead,
        Hidden,
        ModalWindowComponent,
        ModalAddEditProductComponent,
        ModalLogInComponent,
        ModalLogOutComponent,
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
        MatTooltipModule,
        MatDialogModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
