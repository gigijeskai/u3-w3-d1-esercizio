import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlAPI: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<any>(this.urlAPI);
  }
}
