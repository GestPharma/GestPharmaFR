import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmoiresRoutingModule } from './armoires-routing.module';
import { ArmoiresSelectionComponent } from './armoires-selection/armoires-selection.component';
import { ArmoiresEditionComponent } from './armoires-edition/armoires-edition.component';
import { ArmoiresCreationComponent } from './armoires-creation/armoires-creation.component';
import { ArmoiresComponent } from './armoires.component';


@NgModule({
  declarations: [
    ArmoiresSelectionComponent,
    ArmoiresEditionComponent,
    ArmoiresCreationComponent,
    ArmoiresComponent
  ],
  imports: [
    CommonModule,
    ArmoiresRoutingModule
  ]
})
export class ArmoiresModule { }
