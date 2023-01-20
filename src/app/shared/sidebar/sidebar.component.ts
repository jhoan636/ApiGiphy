import { GitsService } from './../../gifs/services/gits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent  {

  constructor( private giftsService: GitsService) { }

  get historial() {
    return this.giftsService.historial;
  }



  buscar(valor: string){
    this.giftsService.buscarGifs(valor)
  }

}
