import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactusComponent } from '../contactus/contactus.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('java 8 Tutorial');
    this.meta.addTags([
      {name: 'description', content: 'java-lovers provides java 8 tutorials with example. We will get basic idea and get handy '
    + 'on java 8 addition.'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'java 8, java 8 tutorial'}
    ]);
   }

  ngOnInit() {
  }
}
