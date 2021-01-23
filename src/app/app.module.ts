import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { CvComponent } from './cv/cv.component';
import { ProjetsComponent } from './projets/projets.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { POCComponent } from './poc/poc.component';
import { AROComponent } from './aro/aro.component';
import { ComplexiteComponent } from './complexite/complexite.component';
import { GLComponent } from './gl/gl.component';
import { ERDIComponent } from './erdi/erdi.component';
import { ISDComponent } from './isd/isd.component';
import { ReseauxComponent } from './reseaux/reseaux.component';
import { AnglaisComponent } from './anglais/anglais.component';
import { FLComponent } from './fl/fl.component';
import { DPRComponent } from './dpr/dpr.component';
import { IHMComponent } from './ihm/ihm.component';
import { CryptoComponent } from './crypto/crypto.component';
import { CommunicationComponent } from './communication/communication.component';
import { SecuAppliComponent } from './secu-appli/secu-appli.component';
import { ArchiJEEComponent } from './archi-jee/archi-jee.component';
import { IntegrationDonneesComponent } from './integration-donnees/integration-donnees.component';
import { StageOuTERComponent } from './stage-ou-ter/stage-ou-ter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursComponent,
    CvComponent,
    ProjetsComponent,
    FourOhFourComponent,
    POCComponent,
    AROComponent,
    ComplexiteComponent,
    GLComponent,
    ERDIComponent,
    ISDComponent,
    ReseauxComponent,
    AnglaisComponent,
    FLComponent,
    DPRComponent,
    IHMComponent,
    CryptoComponent,
    CommunicationComponent,
    SecuAppliComponent,
    ArchiJEEComponent,
    IntegrationDonneesComponent,
    StageOuTERComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
