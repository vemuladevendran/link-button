import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-button',
  templateUrl: './m-button.component.html',
  styleUrls: ['./m-button.component.css']
})
export class MButtonComponent implements OnInit {

  newName = [
    'arravials',
    'orange',
    'new',
    'hello',
    'arravials',
    'orange',
    'new',
    'hello',
  ];

  myLink = [
    'game.com',
    'bike.com',
    'new.com',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
