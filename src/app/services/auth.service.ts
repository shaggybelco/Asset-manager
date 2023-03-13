import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  users: any[] =[{
    username: 'shaggy',
    pasword: '123456'
  }]

 
}
