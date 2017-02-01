import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandpageComponent } from './pages/landpage/landpage.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandpageComponent,
    FaleConoscoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
