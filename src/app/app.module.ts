import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { InstrumentoDetalleComponent } from './instrumento-detalle/instrumento-detalle.component';
import { InstrumentoItemComponent } from './instrumento-item/instrumento-item.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstrumentosComponent,
    InstrumentoDetalleComponent,
    InstrumentoItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
