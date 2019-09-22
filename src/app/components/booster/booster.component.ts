import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styles: []
})
export class BoosterComponent implements OnInit {

  @Input() progress = 50;
  @Input() title = 'Leyenda';

  @Output() changeProgress = new EventEmitter();

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  onChnages(newValue: number): void {
    if(newValue >= 100){
      this.progress = 100;
    } else if(newValue <= 0){
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.changeProgress.emit(this.progress);

  }

  changeValue(value: number): void {
    if(((this.progress + value) < 101) && ( (this.progress + value) ) >= 0 ) {
      this.progress += value;
      this.changeProgress.emit(this.progress);
      this.txtProgress.nativeElement.focus();
    }
  }

}
