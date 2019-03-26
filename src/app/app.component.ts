

import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  pictures = [
    { id: 1, name: 'https://images.unsplash.com/photo-1553455860-2fa544e14141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80' },
    { id: 2, name: 'https://images.unsplash.com/photo-1553450646-bd2a35fa7c9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' },
    { id: 3, name: 'https://images.unsplash.com/photo-1553424713-55a8239f28aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
  ];

  imgCounter = 0;
  image = this.pictures[this.imgCounter];
    
  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 2000);
  }

  prev() {
    if ((this.imgCounter == 0)) {
      this.imgCounter = this.pictures.length - 1;
      this.image = this.pictures[this.imgCounter];

    } else {
      this.imgCounter--;
      this.image = this.pictures[this.imgCounter];
    }
  }

  next() {
    if (this.imgCounter == (this.pictures.length - 1)) {
      this.imgCounter = 0;
      this.image = this.pictures[this.imgCounter];
    } else {
      this.imgCounter++;
      this.image = this.pictures[this.imgCounter];
    }
  }

  selectImage(index) {
    this.image = this.pictures[index];
  }
  
  

}






