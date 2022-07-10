import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinsCreationComponent } from './medecins-creation/medecins-creation.component';
import { MedecinsEditionComponent } from './medecins-edition/medecins-edition.component';
import { MedecinsSelectionComponent } from './medecins-selection/medecins-selection.component';
import { MedecinsVisualisationComponent } from './medecins-visualisation/medecins-visualisation.component';

const routes: Routes = [
  { path : "creation", component : MedecinsCreationComponent},
  { path : "edition/:id", component : MedecinsEditionComponent},
  { path : "visualisation/:id", component : MedecinsVisualisationComponent},
  { path : "**", component : MedecinsSelectionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedecinsRoutingModule { }
