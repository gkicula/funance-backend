import { Injectable } from '@angular/core';
import { Competencia } from '../model/competencia';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetenciasService {

  //private readonly API = '/assets/valores.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Competencia[]>(environment.api.getCompetencies).pipe(first());

    /*************************************************************************
    *                                                                        *
    *    UTILIZAR O .pipe() COMO FORMA DE DEBUGGAR AS CHAMADAS ASSÍNCRONAS   *
    *                                                                        *
    *return this.httpClient.get<Competencia[]>(this.API)                     *
    *.pipe(                                                                  *
    *  tap(competencias => console.log(competencias))                        *
    *);                                                                      *
    *************************************************************************/
  }

  save(form: Competencia) {
    return this.httpClient.post<Competencia>(environment.api.saveData, form);
  }

  getCrypto(crypto: any) {
    return this.httpClient.get<any>(environment.api.getCripto + crypto);
  }
}
