import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  users: any[] =[{
    username: 'shaggy',
    pasword: '123456'
  }]

  login(data: any):any{
    return this.users.find(user => user.username.toLowerCase() === data.username.toLowerCase() && user.pasword === data.password)
  }

 
}
