import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedecinsRoutingModule } from './medecins-routing.module';
import { MedecinsSelectionComponent } from './medecins-selection/medecins-selection.component';
import { MedecinsEditionComponent } from './medecins-edition/medecins-edition.component';
import { MedecinsCreationComponent } from './medecins-creation/medecins-creation.component';
import { MedecinsComponent } from './medecins.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MedecinsVisualisationComponent } from './medecins-visualisation/medecins-visualisation.component';


@NgModule({
  declarations: [
    MedecinsSelectionComponent,
    MedecinsEditionComponent,
    MedecinsCreationComponent,
    MedecinsComponent,
    MedecinsVisualisationComponent
  ],
  imports: [
    CommonModule,
    MedecinsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ]
})
export class MedecinsModule { }
