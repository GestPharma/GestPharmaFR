import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiluliersRoutingModule } from './piluliers-routing.module';
import { PiluliersCreationComponent } from './piluliers-creation/piluliers-creation.component';
import { PiluliersEditionComponent } from './piluliers-edition/piluliers-edition.component';
import { PiluliersSelectionComponent } from './piluliers-selection/piluliers-selection.component';
import { PiluliersComponent } from './piluliers.component';


@NgModule({
  declarations: [
    PiluliersCreationComponent,
    PiluliersEditionComponent,
    PiluliersSelectionComponent,
    PiluliersComponent
  ],
  imports: [
    CommonModule,
    PiluliersRoutingModule
  ]
})
export class PiluliersModule { }
