import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interface/interface';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }

  getMenuOptions() {
    return this.httpClient.get<Componente[]>("assets/data/menu.json");
  }

  getAlbunes() {
    return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getHeroes() {
    return this.httpClient.get("assets/data/superheroes.json")
      .pipe(
        delay(2000)
      );
  }

}
