import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitsPageComponent } from './gitsPage/gitsPage.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GitsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GitsPageComponent
  ]
})
export class GifsModule { }
