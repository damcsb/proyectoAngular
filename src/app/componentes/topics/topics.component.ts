import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  topics = [
    {
      "title": "My Account",
      "description": "How to Manage your account and its features",
      "image": "https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/23/2016/03/17-1.png"
    },
    {
      "title": "My Account",
      "description": "How to Manage your account and its features",
      "image": "https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/23/2016/03/17-1.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
