import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Which would be easier React or Angular, lets find it using learning ';
  img='../assets/typescript.jpg';
  choice=false;
  show(){
    alert("You have clicked on the button");
  }
}
