import { Component, Input } from '@angular/core';
import { Instrumento } from '../models/instrumento';

@Component({
  selector: 'app-instrumento-item',
  templateUrl: './instrumento-item.component.html',
  styleUrls: ['./instrumento-item.component.css']
})
export class InstrumentoItemComponent {
  @Input() instrumento!: Instrumento;
}
