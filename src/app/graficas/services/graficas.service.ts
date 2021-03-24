import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private _http: HttpClient ) { }


  getUsuarioRedesSociales(){
    return this._http.get('http://localhost:3000/grafica');
  }


  getUsuariosRedesSocialesDonaData(){
    return this.getUsuarioRedesSociales()
            .pipe(
              map( data => {
                const labels = Object.keys(data);
                const valores = Object.values(data);
                return {labels, valores};
              })
            );
  }
}
