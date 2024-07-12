import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from '../instrumento.service';
import { Instrumento } from '../models/instrumento';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  instrumentos: Instrumento[] = [];

  constructor(private instrumentoService: InstrumentoService) { }

  ngOnInit(): void {
    this.instrumentos = this.instrumentoService.getInstrumentos();
  }

}
