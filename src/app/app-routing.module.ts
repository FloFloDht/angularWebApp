import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { CvComponent } from './cv/cv.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path: 'cours', component:CoursComponent},
  {path: 'home', component:HomeComponent},
  {path: 'cv', component:CvComponent},
  {path: 'projets', component:ProjetsComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponent=[HomeComponent, CoursComponent];
