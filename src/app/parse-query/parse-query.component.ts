import { Component, EventEmitter, Output } from '@angular/core';
import Parse from '../parse';

@Component({
  selector: 'app-parse-query',
  templateUrl: './parse-query.component.html',
})
export class ParseQueryComponent {
  objects: Parse.Object[] = [];
  Object: any;
  @Output() edit = new EventEmitter();
  constructor() {
    this.Object = window.Object;
    new Parse.Query('Test').find().then((objects) => {
      this.objects = objects;
    });
  }
}
