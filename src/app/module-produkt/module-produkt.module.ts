import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../module-produkt/product/product.component';
import { ZoznamProduktovComponent } from '../module-produkt/zoznam-produktov/zoznam-produktov.component';
import { FilterComponent } from '../module-produkt/filter/filter.component';
import { FilterOptionComponent } from '../module-produkt/filter-option/filter-option.component';
import { FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ProductDetailComponent } from '../module-produkt/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './produkt-routing.module';
import { SortByPipePipe } from './sort-by-pipe.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CountdownComponent } from '../countdown/countdown.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { MatButtonModule } from '@angular/material/button';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
    declarations: [
        ProductComponent,
        ZoznamProduktovComponent,
        FilterComponent,
        FilterOptionComponent,
        ProductDetailComponent,
        SortByPipePipe,
        CountdownComponent,
        ShoppingCartListComponent,
        NewProductFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductRoutingModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatTooltipModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule
    ],

    exports: [
        ProductComponent,
        ZoznamProduktovComponent,
        FilterComponent,
        FilterOptionComponent,
        ProductDetailComponent,
        RouterModule,
        CountdownComponent,
        MatBadgeModule,
        MatFormFieldModule,
    ],

    providers: [SortByPipePipe],
})
export class ModuleProduktModule {}
