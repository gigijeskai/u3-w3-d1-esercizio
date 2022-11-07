import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlAPI: string = 'https://jsonplaceholder.typicode.com/users';
  likeList: any[] = [];

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<any>(this.urlAPI);
  }
  addLike(user: any) {
    this.http.post(this.urlAPI, user);
    this.likeList.push(user);
    return this.http.post(this.urlAPI, user);
  }
}
