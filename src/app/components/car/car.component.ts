import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  name = 'www';
  speed: number | undefined;
  model?: string; /* ? показує шо це опціонельне поле може існувати а може і ні*/
  colors!: Colors;
  // @ts-ignore
  alternative: {
    one: string;
    two: string;
  };
  options?: string[];   /*create array options */
  isEdit: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.name = 'Tesla';
    this.model = 'Model X';
    this.speed = 225;
    this.colors = {
      car: 'black',
      salon: 'brown',
      wheels: 'silver',
    };
    this.alternative = {
      one: 'alternative one',
      two: 'alternative two'
    }
    this.options = ['ABS', 'Autopilot', 'Auto Parking', 'parktronic'];
    // this.test = false;
  }

  showEdit = () => {
    this.isEdit = !this.isEdit
    // console.log(this.isEdit);
}

  // tslint:disable-next-line:typedef
  addOpt(specOption: string){
  // addOpt = (option: string) => {
    this.options?.unshift(specOption);
    return false;
  }

  // tslint:disable-next-line:typedef
  deleteOpt(specOption: string){
    // console.log(specOption);
    // @ts-ignore
    for (let i = 0; i < this.options?.length; i++){
      if (this.options?.[i] === specOption ) {
        this.options?.splice(i, 1);
        break;
      }
    }
  }

  // tslint:disable-next-line:typedef
  carSelect(carName: string){
    if (carName === 'bmw') {
      console.log('you click on bmw button');
      this.name = 'BMW';
      this.model = 'M5';
      this.speed = 280;
      this.colors = {
        car: 'White',
        salon: 'black',
        wheels: 'silver'
      };
      this.options = ['ABS', 'Autopilot', 'Options100500', 'parktronic'];
    } else if (carName === 'audi'){
      this.name = 'AUDI';
      this.model = 'TT';
      this.speed = 270;
      this.colors = {
        car: 'black',
        salon: 'brown',
        wheels: 'silver'
      };
      this.options = ['ABS', 'Autopilot', 'Auto Parking', ];
    } else {
      this.name = 'Tesla';
      this.model = 'Model Xwwwwwwwwwww';
      this.speed = 250;
      this.colors = {
        car: 'purpul',
        salon: 'brown',
        wheels: 'silver'
      };
      this.options = ['Options100500', 'parktronic'];
    }
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
