import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessagesFrontComponent } from './messages-front/messages-front.component';
import { MenuComponent } from './menu/menu.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card';
import { TokenInterceptorInterceptor } from './Services/token-interceptor.interceptor';
import { ModalModule } from './_modal';
import { MedecinsModule } from './medecins/medecins.module';
import { PharmaciensModule } from './pharmaciens/pharmaciens.module';
import { MedicamentsModule } from './medicaments/medicaments.module';
import { OrdonnancesModule } from './ordonnances/ordonnances.module';
import { ArmoiresModule } from './armoires/armoires.module';
import { PiluliersModule } from './piluliers/piluliers.module';
import { PersonnesModule } from './personnes/personnes.module';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { HomeComponent } from './home/home.component';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [
    AppComponent,
    MessagesFrontComponent,
    MenuComponent,
    FooterFrontComponent,
    MenuComponent,
    ScrollToTopComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    ModalModule,
    MedecinsModule,
    PharmaciensModule,
    MedicamentsModule,
    OrdonnancesModule,
    ArmoiresModule,
    PiluliersModule,
    PersonnesModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    ModalModule,
    MedecinsModule,
    PharmaciensModule,
    MedicamentsModule,
    OrdonnancesModule,
    ArmoiresModule,
    PiluliersModule,
    PersonnesModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
