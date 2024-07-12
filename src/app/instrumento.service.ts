// src/app/instrumento.service.ts
import { Injectable } from '@angular/core';
import { Instrumento } from './models/instrumento';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  private instrumentos: Instrumento[] = [
    { id: 1, nombre: 'Guitarra', tipo: 'Cuerda', precio: 1000, descripcion: 'Guitarra acústica' },
    { id: 2, nombre: 'Piano', tipo: 'Tecla', precio: 3000, descripcion: 'Piano clásico' },
    { id: 3, nombre: 'Violin', tipo: 'Cuerda', precio: 1500, descripcion: 'Violin Stradivarius' },
    { id: 4, nombre: 'Flauta', tipo: 'Viento', precio: 500, descripcion: 'Flauta de madera' },
    { id: 5, nombre: 'Trompeta', tipo: 'Viento', precio: 800, descripcion: 'Trompeta de metal' },
    { id: 6, nombre: 'Batería', tipo: 'Percusión', precio: 2500, descripcion: 'Batería completa' },
    { id: 7, nombre: 'Saxofón', tipo: 'Viento', precio: 2000, descripcion: 'Saxofón alto' },
    { id: 8, nombre: 'Bajo', tipo: 'Cuerda', precio: 1200, descripcion: 'Bajo eléctrico' },
    { id: 9, nombre: 'Violoncello', tipo: 'Cuerda', precio: 2200, descripcion: 'Violoncello profesional' },
    { id: 10, nombre: 'Órgano', tipo: 'Tecla', precio: 5000, descripcion: 'Órgano de iglesia' },
    { id: 11, nombre: 'Clarinete', tipo: 'Viento', precio: 1100, descripcion: 'Clarinete de madera' },
    { id: 12, nombre: 'Arpa', tipo: 'Cuerda', precio: 4000, descripcion: 'Arpa de concierto' },
    { id: 13, nombre: 'Timbal', tipo: 'Percusión', precio: 1300, descripcion: 'Timbal sinfónico' },
    { id: 14, nombre: 'Marimba', tipo: 'Percusión', precio: 2700, descripcion: 'Marimba de concierto' },
    { id: 15, nombre: 'Oboe', tipo: 'Viento', precio: 1800, descripcion: 'Oboe profesional' }
];

  constructor() { }

  getInstrumentos(): Instrumento[] {
    return this.instrumentos;
  }

  getInstrumentoById(id: number): Instrumento | undefined {
    return this.instrumentos.find(instr => instr.id === id);
  }
}
