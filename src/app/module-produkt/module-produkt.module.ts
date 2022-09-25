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

@NgModule({
    declarations: [
        ProductComponent,
        ZoznamProduktovComponent,
        FilterComponent,
        FilterOptionComponent,
        ProductDetailComponent,
        SortByPipePipe
    ],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,ProductRoutingModule
    ],

    exports: [
        ProductComponent,
        ZoznamProduktovComponent,
        FilterComponent,
        FilterOptionComponent,
        ProductDetailComponent,
        RouterModule
    ]
})
export class ModuleProduktModule {}
