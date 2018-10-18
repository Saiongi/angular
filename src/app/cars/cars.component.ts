import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  
  carName = '';
  carYear = 2018;
  cars:  {name: string, year: number}[]  = 
  [
    {
      name: 'ford',
      year: 2015
    }, {
      name: 'audi',
      year: 2010
    }, {
      name:'bmw',
      year: 2017
   }];
  
  constructor() {   
  }
  addCar(){
    this.cars.push({
      name:this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carName = '';
    this.carYear = 2018;
  }

}
