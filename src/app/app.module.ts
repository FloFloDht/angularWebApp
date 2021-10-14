import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ProjetsComponent } from './projets/projets.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    ProjetsComponent,
    FourOhFourComponent,
    AboutMeComponent,
    ConnexionComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
