import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, Search } from '../interface/gifs';

@Injectable({
  providedIn: 'root'
})
export class GitsService {

  private apiKey: string = 'F1gISp3vgP0BkVFtVhlI35DTpYc2lyxS';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Data[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('Historial')) {
      this._historial = JSON.parse(localStorage.getItem('Historial')!)
    }
    if (localStorage.getItem('gifts')) {
      this.resultados = JSON.parse(localStorage.getItem('gifts')!)
    }
  }

  buscarGifs(query: string = '') {

    query = query.trim().toUpperCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('Historial', JSON.stringify(this._historial))

    }

    const params = new HttpParams()
          .set('api_key',this.apiKey)
          .set('limit', '10')
          .set('q',query);

          console.log(params.toString());


    this.http.get<Search>(`${this.servicioUrl}/search`,{params})
      .subscribe((resp) => {
        console.log(resp.data);

        this.resultados = resp.data
        localStorage.setItem('gifts', JSON.stringify(this.resultados))
      })
  }

}
