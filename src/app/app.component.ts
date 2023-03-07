import { Component } from '@angular/core';
import Parse from './parse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  objects = true
  object = new Parse.Object('Test');
  edit(object: Parse.Object) {
    console.log(object);
    this.object = object;
    this.objects = true;
  }
}
