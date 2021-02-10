import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css']
})
export class ButtonLinkComponent implements OnInit {

  @Input() ButtonName = 'Google';
  @Input() myLink = 'wwww.google.com';

  constructor() { }

  ngOnInit(): void {
  }

}
