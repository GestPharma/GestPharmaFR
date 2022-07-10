import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmaciensRoutingModule } from './pharmaciens-routing.module';
import { PharmaciensCreationComponent } from './pharmaciens-creation/pharmaciens-creation.component';
import { PharmaciensEditionComponent } from './pharmaciens-edition/pharmaciens-edition.component';
import { PharmaciensSelectionComponent } from './pharmaciens-selection/pharmaciens-selection.component';
import { PharmaciensComponent } from './pharmaciens.component';

@NgModule({
  declarations: [
    PharmaciensCreationComponent,
    PharmaciensEditionComponent,
    PharmaciensSelectionComponent,
    PharmaciensComponent,
  ],
  imports: [
    CommonModule,
    PharmaciensRoutingModule
  ]
})
export class PharmaciensModule { }
