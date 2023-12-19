import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url='http://localhost:3000/';
  constructor(private http:HttpClient) { }

  getAll():Observable<Game[]>{
    return this.http.get<Game[]>(this.url+'getAll');
  }
}
