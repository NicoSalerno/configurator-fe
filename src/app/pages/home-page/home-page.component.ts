import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  chatOpen: boolean = false;

  openChat(){
    this.chatOpen = true;
    console.log(this.chatOpen);
  }

  closeChat(){
    this.chatOpen = false;
    console.log(this.chatOpen);
  }
}
