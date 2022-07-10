import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
      { path : "medecins", component : MedecinsComponent, loadChildren : () => import('./medecins/medecins.module').then(m => m.MedecinsModule)},
      { path : 'notfound', component : NotfoundComponent},
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path : 'home', component : HomeComponent},
      { path : "**", component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 