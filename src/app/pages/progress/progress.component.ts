import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  public progress1 = 30;
  public progress2 = 50;

  constructor() { }

  ngOnInit() {
  }

}
