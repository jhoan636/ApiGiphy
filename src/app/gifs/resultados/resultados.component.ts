import { Data } from '../interface/gifs';
import { GitsService } from './../services/gits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})

//let resultados: Data[] = resultados();
export class ResultadosComponent  {

  constructor(private giftsService: GitsService) { }


   get resultados(){
    return this.giftsService.resultados;
  }



}
