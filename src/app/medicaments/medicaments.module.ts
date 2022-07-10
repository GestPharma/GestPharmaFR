import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentsRoutingModule } from './medicaments-routing.module';
import { MedicamentsSelectionComponent } from './medicaments-selection/medicaments-selection.component';
import { MedicamentsEditionComponent } from './medicaments-edition/medicaments-edition.component';
import { MedicamentsCreationComponent } from './medicaments-creation/medicaments-creation.component';
import { MedicamentsComponent } from './medicaments.component';


@NgModule({
  declarations: [
    MedicamentsSelectionComponent,
    MedicamentsEditionComponent,
    MedicamentsCreationComponent,
    MedicamentsComponent
  ],
  imports: [
    CommonModule,
    MedicamentsRoutingModule
  ]
})
export class MedicamentsModule { }
