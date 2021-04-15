import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  account = {
    name: '',
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
