import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Is } from 'src/app/isModel';
import { IslerComponent } from '../isler/isler.component';

@Component({
  selector: 'is',
  templateUrl: './is.component.html',
})
export class IsComponent implements OnInit {
  public liste: Is[] = [];

  constructor() {}

  @Input() eleman!: Is;
  @Output() silEvent = new EventEmitter<Is>();
  @Output() tamamlaEvent = new EventEmitter<Is>();

  ngOnInit(): void {}

  sil(gorev: Is) {
    this.silEvent.emit(gorev);
  }

  tamamla(eleman: Is) {
    this.tamamlaEvent.emit(eleman);
  }
}
