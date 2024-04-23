import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../Movie';
import { MovieDetail } from '../MovieDetail';
import { ParamsSearch } from '../ParamsSearch';

@Injectable({
  providedIn: 'root'
})

export class TmdbService {
  baseApiUrl = environment.baseApiUrl;
  apiKey = environment.keyApi


  constructor(private http: HttpClient) { }

  getMoviesVitrine(typeList: string): Observable<Movie>{
    return this.http.get<Movie>(`${this.baseApiUrl}movie/${typeList}?api_key=${this.apiKey}&language=pt-BR`);
  }

  getMovie(id: number): Observable<MovieDetail>{
    return this.http.get<MovieDetail>(`${this.baseApiUrl}movie/${id}?api_key=${this.apiKey}&language=pt-BR`);
  }

  search(term: string, params: ParamsSearch): Observable<Movie>{
    let url = `${this.baseApiUrl}search/movie?api_key=${this.apiKey}&query=${term}&language=pt-BR`;

    if(params){
      for (let key in params) {
        if (params.hasOwnProperty(key)) {
          url += `&${key}=${params[key]}`;
        }
      }
    }

    return this.http.get<Movie>(url)
  } 
}
