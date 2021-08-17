import { Component, Input, OnInit } from '@angular/core';

type SliderType = Array<{ headercardtitle: string, tag: string[], minicardtitle: string, author: string, authorimage: string, date: string }>;
@Component({
  selector: 'slider-articles',
  templateUrl: './slider-articles.component.html',
  styleUrls: ['./slider-articles.component.css']
})
export class SliderArticlesComponent implements OnInit {

  @Input() dataSource: SliderType = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource)
  }

}
