import { Component, OnInit } from '@angular/core';
type SliderType = Array<{ headercardtitle: string, tag: string[], minicardtitle: string, author: string, authorimage: string, date: string }>;
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public slider: SliderType = [
    {
      headercardtitle: "Popular\
      <br>\
      this\
      <br>\
      month",
      tag: ["jamstack", "zooming"],
      minicardtitle: "How to Get a Pixel-Perfect, Linearly Scaled UI",
      author: "Georgi Nikoloff",
      authorimage: "https://secure.gravatar.com/avatar/e3d80d570f70076b06b900f369ec2190?s=80&amp;d=retro&amp;r=pg",
      date: "on Jul 15, 2021"
    },
    {
      headercardtitle: "Popular\
      <br>\
      this\
      <br>\
      month",
      tag: ["jamstack", "zooming"],
      minicardtitle: "How to Get a Pixel-Perfect, Linearly Scaled UI",
      author: "Mike Neumegen",
      authorimage: "https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg",
      date: "on Jul 15, 2021"
    },
    {
      headercardtitle: "Popular\
      <br>\
      this\
      <br>\
      month",
      tag: ["jamstack", "zooming"],
      minicardtitle: "How to Get a Pixel-Perfect, Linearly Scaled UI",
      author: "Jack Neumegen",
      authorimage: "https://secure.gravatar.com/avatar/3d393e9bdc4460c8ced8b139b8fcdbb7?s=80&d=retro&r=pg",
      date: "on Jul 15, 2021"
    },
    {
      headercardtitle: "Popular\
      <br>\
      this\
      <br>\
      month",
      tag: ["jamstack", "zooming"],
      minicardtitle: "How to Get a Pixel-Perfect, Linearly Scaled UI",
      author: "Jony Stack",
      authorimage: "https://secure.gravatar.com/avatar/151f5327ae2dac26ba1255335b26ec9a?s=80&d=retro&r=pg",
      date: "on Jul 15, 2021"
    },
    {
      headercardtitle: "Popular\
      <br>\
      this\
      <br>\
      month",
      tag: ["jamstack", "zooming"],
      minicardtitle: "How to Get a Pixel-Perfect, Linearly Scaled UI",
      author: "Robin Rendle",
      authorimage: "https://css-tricks.com/wp-content/uploads/2019/01/me-black-white-80x80.jpg",
      date: "on Jul 15, 2021"
    },

  ];
  public slider2: SliderType = [
    {
      headercardtitle: "The\
      <br>\
      Monthly\
      <br>\
      Mixup",
      tag: ["jamstack", "zooming"],
      minicardtitle: "How to Get a Pixel-Perfect, Linearly Scaled UI",
      author: "Robin Rendle",
      authorimage: "https://css-tricks.com/wp-content/uploads/2019/01/me-black-white-80x80.jpg",
      date: "on Jul 15, 2021"
    },
    {
      headercardtitle: "Popular\
      <br>\
      this\
      <br>\
      month",
      tag: ["jamstack", "zooming"],
      minicardtitle: "A Step-By-Step Process for Turning Designs Into Code ",
      author: "Jony Stack",
      authorimage: "https://secure.gravatar.com/avatar/151f5327ae2dac26ba1255335b26ec9a?s=80&d=retro&r=pg",
      date: "on Jul 15, 2021"
    },
    {
      headercardtitle: "Popular\
      <br>\
      this\
      <br>\
      month",
      tag: ["jamstack", "zooming"],
      minicardtitle: "A Step-By-Step Process for Turning Designs Into Code ",
      author: "Jack Neumegen",
      authorimage: "https://secure.gravatar.com/avatar/3d393e9bdc4460c8ced8b139b8fcdbb7?s=80&d=retro&r=pg",
      date: "on Jul 15, 2021"
    },
    {
      headercardtitle: "Popular\
      <br>\
      this\
      <br>\
      month",
      tag: ["jamstack", "zooming"],
      minicardtitle: "A Step-By-Step Process for Turning Designs Into Code ",
      author: "Georgi Nikoloff",
      authorimage: "https://secure.gravatar.com/avatar/e3d80d570f70076b06b900f369ec2190?s=80&amp;d=retro&amp;r=pg",
      date: "on Jul 15, 2021"
    },
    {
      headercardtitle: "Popular\
      <br>\
      this\
      <br>\
      month",
      tag: ["jamstack", "zooming"],
      minicardtitle: "A Step-By-Step Process for Turning Designs Into Code ",
      author: "Ana Tudor",
      authorimage: "https://secure.gravatar.com/avatar/bee436794e066a5423040cf673c7506f?s=80&d=retro&r=pg",
      date: "on Jul 15, 2021"
    },

  ];


}
