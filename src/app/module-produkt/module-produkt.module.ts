import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from '../module-produkt/product/product.component';
import {ZoznamProduktovComponent} from '../module-produkt/zoznam-produktov/zoznam-produktov.component';
import {FilterComponent} from '../module-produkt/filter/filter.component';
import {FilterOptionComponent} from '../module-produkt/filter-option/filter-option.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductDetailComponent} from '../module-produkt/product-detail/product-detail.component';
import {RouterModule} from '@angular/router'
import { ProductRoutingModule } from './produkt-routing.module';
import { SortByPipePipe } from './sort-by-pipe.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CountdownComponent } from '../countdown/countdown.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    declarations: [
        ProductComponent,
        ZoznamProduktovComponent,
        FilterComponent,
        FilterOptionComponent,
        ProductDetailComponent,
        SortByPipePipe,
        CountdownComponent,
        
    ],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,ProductRoutingModule, MatCheckboxModule, MatBadgeModule,MatTooltipModule
    ],

    exports: [
        ProductComponent,
        ZoznamProduktovComponent,
        FilterComponent,
        FilterOptionComponent,
        ProductDetailComponent,
        RouterModule,
        CountdownComponent,
        MatBadgeModule
    ],

    providers: [
        SortByPipePipe 
    ],
})
export class ModuleProduktModule {}
