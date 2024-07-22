import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentoService } from '../instrumento.service';
import { CarritoService } from '../carrito.service';
import { Instrumento } from '../models/instrumento';

@Component({
  selector: 'app-instrumento-detalle',
  templateUrl: './instrumento-detalle.component.html',
  styleUrls: ['./instrumento-detalle.component.css']
})
export class InstrumentoDetalleComponent implements OnInit {

  instrumento: Instrumento | undefined;

  constructor(
    private route: ActivatedRoute,
    private instrumentoService: InstrumentoService,
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.instrumento = this.instrumentoService.getInstrumentoById(id);
  }

  addToCart(instrumento: Instrumento): void {
    this.carritoService.addToCart(instrumento);
    window.alert('El instrumento ha sido agregado al carrito!');
  }
}
