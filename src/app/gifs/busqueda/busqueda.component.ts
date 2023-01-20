import { GitsService } from './../services/gits.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GitsService){}
  buscar() {

    const valor = this.txtBuscar.nativeElement.value;

    if (valor.length != 0) {
      this.gifsService.buscarGifs(valor);
      this.txtBuscar.nativeElement.value = '';
    }
  }
}
