import { Component, OnInit } from '@angular/core';

//import models
import { Toy } from "../models/toy.model";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {

  name: string = '';
  surname: string = '';
  email: string = '';
  greeting: string = '';
  errorStatus: string = 'ok'; 
  users = [{name: 'Pawel', surname: 'Daniel', email: 'pawel@wp.pl'},
                  {name: 'Adam', surname: 'Koncki', email: 'adam@wp.pl'} 
                 ];
  isCreated: boolean = false;

  

  constructor() {
    this.errorStatus = Math.random() > 0.5 ? 'error' : 'ok';

  }


   ngOnInit() {
   }
   getColor() {
     return this.errorStatus == 'error' ? 'red' : 'green'
   }

   formHandler() {
     this.greeting = `Welcome ${this.name} ${this.surname}! You will be added to our database with email: ${this.email}`
     this.name="";
     this.surname = "";
     this.email = "";
     this.isCreated = true;
   }
}