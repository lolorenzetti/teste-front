import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { TreinadorDto } from '../model/treinador-dto.model';
import { Treinador } from '../model/treinador.model';

@Injectable({
  providedIn: 'root'
})
export class TreinadorService {

  baseUrl: string = "http://localhost:8080/api/pokemon";

  constructor(private httpCliente: HttpClient) { }

  buscarTreinadores(): Observable<Treinador[]> {
    return this.httpCliente.get<Treinador[]>(
      `${this.baseUrl}/treinadores`
    )
  }

  cadastrar(treinador: TreinadorDto): Observable<Treinador> {
    return this.httpCliente.post<Treinador>(
      `${this.baseUrl}/treinador`,
      treinador
    )
  }

  trocarPokemon(id: number): Observable<Treinador> {
    const body = {};
    return this.httpCliente.put<Treinador>(
      `${this.baseUrl}/trocar-pokemon/${id}`,
      body
    )
  }


  deletar(id: number) {
    return this.httpCliente.delete(
      `${this.baseUrl}/deletar-treinador/${id}`
    )
  }
}
