import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {StatistikaComponent} from '../module-statistika/statistika/statistika.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { StatistikaRoutingModule } from './statistika-routing.module';


@NgModule({
    declarations: [
        StatistikaComponent,
    ],
    imports: [
        CommonModule,
        MatSliderModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSortModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        StatistikaRoutingModule
       
    ],
    exports: [
      StatistikaComponent,
      RouterModule
  ]
})
export class ModuleStatistikaModule {}
