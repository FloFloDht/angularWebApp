import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AnglaisComponent } from './anglais/anglais.component';
import { ArchiJEEComponent } from './archi-jee/archi-jee.component';
import { AROComponent } from './aro/aro.component';
import { CommunicationComponent } from './communication/communication.component';
import { ComplexiteComponent } from './complexite/complexite.component';
import { CoursComponent } from './cours/cours.component';
import { CryptoComponent } from './crypto/crypto.component';
import { CvComponent } from './cv/cv.component';
import { DPRComponent } from './dpr/dpr.component';
import { ERDIComponent } from './erdi/erdi.component';
import { FLComponent } from './fl/fl.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { GLComponent } from './gl/gl.component';
import { HomeComponent } from './home/home.component';
import { IHMComponent } from './ihm/ihm.component';
import { IntegrationDonneesComponent } from './integration-donnees/integration-donnees.component';
import { ISDComponent } from './isd/isd.component';
import { PhotosComponent } from './photos/photos.component';
import { POCComponent } from './poc/poc.component';
import { ProjetsComponent } from './projets/projets.component';
import { ReseauxComponent } from './reseaux/reseaux.component';
import { SecuAppliComponent } from './secu-appli/secu-appli.component';
import { StageOuTERComponent } from './stage-ou-ter/stage-ou-ter.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'cours', component: CoursComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutme', component: AboutMeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'projets', component: ProjetsComponent},
  {path : 'photos', component: PhotosComponent},
  {path: 'POC', component: POCComponent},
  {path: 'ARO', component: AROComponent},
  {path: 'complexite', component: ComplexiteComponent},
  {path: 'GL', component: GLComponent},
  {path: 'ERDI', component: ERDIComponent},
  {path: 'ISD', component: ISDComponent},
  {path: 'reseaux', component: ReseauxComponent},
  {path: 'anglais', component: AnglaisComponent},
  {path: 'FL', component: FLComponent},
  {path: 'DPR', component: DPRComponent},
  {path: 'cryptographie', component: CryptoComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'IHM', component: IHMComponent},
  {path: 'securite_application', component: SecuAppliComponent},
  {path: 'architecture_jee', component: ArchiJEEComponent},
  {path: 'integration_donnees', component: IntegrationDonneesComponent},
  {path: 'stage_ter', component: StageOuTERComponent},
  {path: 'not-found', component: FourOhFourComponent },
  {path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponent = [HomeComponent, CoursComponent];
