import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Les directives';
  informations: string[] = [
    "Les chats sont les bests",
    'Les chiens ça pue',
    "Bouuuh les serpents"
  ];
  classes = {
    'red': this.informations.length <=2,
    'green': this.informations.length >=2
  }
}
