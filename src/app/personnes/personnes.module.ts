import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnesRoutingModule } from './personnes-routing.module';
import { PersonnesSelectionComponent } from './personnes-selection/personnes-selection.component';
import { PersonnesEditionComponent } from './personnes-edition/personnes-edition.component';
import { PersonnesCreationComponent } from './personnes-creation/personnes-creation.component';
import { PersonnesComponent } from './personnes.component';


@NgModule({
  declarations: [
    PersonnesSelectionComponent,
    PersonnesEditionComponent,
    PersonnesCreationComponent,
    PersonnesComponent
  ],
  imports: [
    CommonModule,
    PersonnesRoutingModule
  ]
})
export class PersonnesModule { }
