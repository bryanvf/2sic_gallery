

import { Component, OnInit } from '@angular/core';
import { delay } from 'q';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  pictures = [
    { titel: "pic1", name: 'https://images.unsplash.com/photo-1553455860-2fa544e14141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80' },
    { titel: "pic2", name: 'https://images.unsplash.com/photo-1553450646-bd2a35fa7c9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' },
    { titel: "pic3", name: 'https://images.unsplash.com/photo-1553424713-55a8239f28aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
  ];

  imgCounter = 0;
  image = this.pictures[this.imgCounter];
  imageInterval: number;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.startInterval();

  }

  startInterval() {
    this.imageInterval = window.setInterval(() => {
      this.showNext();
    }, 2000);
  }

  prev() {
    clearInterval(this.imageInterval);
    delay(2000);
    this.startInterval();
    if ((this.imgCounter == 0)) {
      this.imgCounter = this.pictures.length - 1;
      this.image = this.pictures[this.imgCounter];

    } else {
      this.imgCounter--;
      this.image = this.pictures[this.imgCounter];

    }
  }

  next() {
    clearInterval(this.imageInterval);
    delay(2000);
    this.startInterval();
    this.showNext();

  }

  showNext() {
    if (this.imgCounter == (this.pictures.length - 1)) {
      this.imgCounter = 0;
      this.image = this.pictures[this.imgCounter];
    } else {
      this.imgCounter++;
      this.image = this.pictures[this.imgCounter];
    }
  }

  selectImage(index: number) {


    clearInterval(this.imageInterval);
    delay(2000);
    this.startInterval();
    this.image = this.pictures[index];
  }

  addImage(name: string, titel: string) {

    if (titel !== '' && name !== '') {

      this.pictures.push({ 'titel': titel, 'name': name });
    } else {
      console.log('error')
      this.snackBar.open('inputs empty', '', {
        duration: 2000,
      });
      
    }
  }

}






