import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent  implements OnInit {


  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
  }

  username: string = '';
  password: string = '';

  login(){
    if(this.username && this.password){
      const log = this.auth.login({username: this.username, password: this.password})
      if(log){
        console.log('log the user');
        this.router.navigateByUrl('/home')
      }
    }
  }

}
