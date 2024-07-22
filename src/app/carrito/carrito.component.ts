import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Instrumento } from '../models/instrumento';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items: (Instrumento & { cantidad: number })[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.items = this.carritoService.getItems();
  }

  removeFromCart(id: number): void {
    this.carritoService.removeFromCart(id);
    this.items = this.carritoService.getItems(); // Actualizar la lista de items
  }

  clearCart(): void {
    this.carritoService.clearCart();
    this.items = [];
  }
}
