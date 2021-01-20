import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path: 'cours', component:CoursComponent},
  {path: 'home', component:HomeComponent},
  {path: 'cv', component:CvComponent},
  {path: 'projets', component:ProjetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponent=[HomeComponent, CoursComponent];
