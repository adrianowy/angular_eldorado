import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  login = {
    email: '',
    password: ''
  };

  constructor(
    private accountService: AccountService,
    private router:  Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      this.router.navigate(['']);
    } catch (e){
      console.error(e);
    }
  }

}
