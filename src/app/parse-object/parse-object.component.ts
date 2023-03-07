import { Component, Input } from '@angular/core';
import Parse from '../parse';
@Component({
  selector: 'app-parse-object',
  templateUrl: './parse-object.component.html'
})
export class ParseObjectComponent {
  @Input() object!: Parse.Object
  JSON: any;
  constructor() {
    this.JSON = window.JSON;
  }
  createNew() {
    this.object = new Parse.Object('Test');
  }

}
