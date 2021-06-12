import { Component, OnInit } from '@angular/core';

//models
import { Toy } from '../models/toy.model';

@Component({
  selector: 'toys-items',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})

export class ToysComponent implements OnInit {

 
    toys: Toy[] = [
      new Toy('Toy nbr 1', "sport", true, 2019, "https://i.pinimg.com/originals/5b/3a/c6/5b3ac6a0a0aa1c8413411e1c144ddcaa.png"),
      new Toy('Toy nbr 2', "kids", true, 2021, "https://i.pinimg.com/originals/5b/3a/c6/5b3ac6a0a0aa1c8413411e1c144ddcaa.png"),
      new Toy('Toy nbr 3', "puzzle", true, 2020, "https://i.pinimg.com/originals/5b/3a/c6/5b3ac6a0a0aa1c8413411e1c144ddcaa.png")
    ];


  constructor(){}
  ngOnInit() {}
}