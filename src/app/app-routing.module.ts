import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import {ProjetsComponent} from './projets/projets.component';
import { ReactiveFormsModule } from '@angular/forms';  

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'projets', component: ProjetsComponent},
  {path : 'contact', component : ContactComponent},
  {path: 'not-found', component: FourOhFourComponent },
  {path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponent = [HomeComponent];
