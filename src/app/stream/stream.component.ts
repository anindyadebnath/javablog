import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['../app.component.css']
})
export class StreamComponent implements OnInit {

  oA = '<';
  cA = '>';
  oC = '{';
  cC = '}';
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('java 8 Stream api');
    this.meta.addTags([
      {name: 'description', content: 'Stream is a sort of Itarator. Stream is abstraction which represents zero or more values.'
       + ' Stream is not a Collection. Valuse might not be stored.'
      + ' It represents sequence of elements which supports sequential or parallel operation.'},
      {name: 'author', content: 'java-lovers'},
      {name: 'keywords', content: 'What is Stream, Stream Pipeline, java 8, java 8 stream, stream filter, stream sort'}
    ]);
    this.meta.addTag({ name: 'description', content: 'How to find distinct element from a stream.'}, true);
    this.meta.addTag({ name: 'description', content: 'How to filter out element from a stream.' }, true);
    this.meta.addTag({ name: 'description', content: 'How to modify element and extract from a stream using map.' }, true);
    this.meta.addTag({ name: 'description', content: 'How to know which element passed a certain point in a pipeline.' }, true);
    this.meta.addTag({ name: 'description', content: 'How to sort using sorted function from stream API.'}, true);
   }

  ngOnInit() {
  }

}
