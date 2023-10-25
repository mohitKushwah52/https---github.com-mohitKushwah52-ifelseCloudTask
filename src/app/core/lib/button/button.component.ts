import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ifElse-lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title:string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
