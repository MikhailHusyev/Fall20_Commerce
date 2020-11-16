import { Component, OnInit } from '@angular/core';
import { fade } from './animations';


@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: fade
})
export class HomePageComponent implements OnInit {
  choice = 2;
  state ='in';
  counter = 0;
  enableAnimation = false;
  imageSource = '';
  imgSrc1 = '../../../assets/Homepage/second_portion.jpg';
  imgSrc2 = '../../../assets/Homepage/stayinformed.jpg';
  imgSrc3 = '../../../assets/Homepage/managePicture.jpeg';

  constructor() {}

  ngOnInit() {
    this.imageSource = this.imgSrc1;
  }

  onClick(){
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
    this.choice = 1;
  }
  onClick2(){
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
    this.choice = 2;
  }
  onClick3(){
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
    this.choice = 3;
  }



  toggleImg(){
    if (this.choice === 1){
      this.imageSource = this.imgSrc1;
      this.choice = 2;
    } else if (this.choice === 2){
      this.imageSource = this.imgSrc2;
      this.choice = 3;
    } else {
      this.imageSource = this.imgSrc3;
      this.choice = 1;
    }
  }

  onDone($event){
    if(this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
    }
  }


  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }

}
