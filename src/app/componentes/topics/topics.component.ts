import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  topics = [
    {
      "title": "Ejemplo1",
      "description": "descripcion ejemplo1",
      "image": "../../../favicon.ico"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
