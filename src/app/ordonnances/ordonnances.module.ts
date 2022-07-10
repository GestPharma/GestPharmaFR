import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdonnancesRoutingModule } from './ordonnances-routing.module';
import { OrdonnancesCreationComponent } from './ordonnances-creation/ordonnances-creation.component';
import { OrdonnancesEditionComponent } from './ordonnances-edition/ordonnances-edition.component';
import { OrdonnancesSelectionComponent } from './ordonnances-selection/ordonnances-selection.component';
import { OrdonnancesComponent } from './ordonnances.component';


@NgModule({
  declarations: [
    OrdonnancesCreationComponent,
    OrdonnancesEditionComponent,
    OrdonnancesSelectionComponent,
    OrdonnancesComponent
  ],
  imports: [
    CommonModule,
    OrdonnancesRoutingModule
  ]
})
export class OrdonnancesModule { }
