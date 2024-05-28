import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = "https://api.github.com/users"

  constructor(private http: HttpClient) { }

  getUser(user: string) {
    return this.http.get<User>(`${this.url}/${user}`)
  }

}
