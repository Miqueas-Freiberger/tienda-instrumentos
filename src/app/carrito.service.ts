import { Injectable } from '@angular/core';
import { Instrumento } from './models/instrumento';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private items: { [id: number]: Instrumento & { cantidad: number } } = {};

  constructor() { }

  addToCart(instrumento: Instrumento): void {
    if (this.items[instrumento.id]) {
      this.items[instrumento.id].cantidad++;
    } else {
      this.items[instrumento.id] = { ...instrumento, cantidad: 1 };
    }
  }

  removeFromCart(id: number): void {
    if (this.items[id]) {
      this.items[id].cantidad--;
      if (this.items[id].cantidad === 0) {
        delete this.items[id];
      }
    }
  }

  getItems(): (Instrumento & { cantidad: number })[] {
    return Object.values(this.items);
  }

  clearCart(): void {
    this.items = {};
  }
}
