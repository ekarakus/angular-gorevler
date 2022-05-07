import { Component, OnInit,Input } from '@angular/core';
import { Is } from 'src/app/isModel';

@Component({
  selector: 'is',
  templateUrl: './is.component.html',
})
export class IsComponent implements OnInit {
  constructor(){

  }
  @Input()
  eleman!: Is;

  ngOnInit(): void {}
}
