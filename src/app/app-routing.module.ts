import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CvComponent } from './cv/cv.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import {PhotosComponent} from './photos/photos.component';
import {ProjetsComponent} from './projets/projets.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'aboutme', component: AboutMeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'projets', component: ProjetsComponent},
  {path : 'photos', component: PhotosComponent},
  {path: 'not-found', component: FourOhFourComponent },
  {path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponent = [HomeComponent];
