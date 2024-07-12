import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { InstrumentoDetalleComponent } from './instrumento-detalle/instrumento-detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'instrumentos', component: InstrumentosComponent },
  { path: 'instrumentos/:id', component: InstrumentoDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
