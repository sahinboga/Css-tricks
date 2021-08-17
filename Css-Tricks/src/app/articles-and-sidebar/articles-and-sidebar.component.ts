import { Component, OnInit } from '@angular/core';
type BlogType = Array<{ image: string, tag: string, header: string, content: string, author: string, authorimage: string, date: string }>;
@Component({
  selector: 'articles-and-sidebar',
  templateUrl: './articles-and-sidebar.component.html',
  styleUrls: ['./articles-and-sidebar.component.css']
})

export class ArticlesAndSidebarComponent implements OnInit {


  public blogs: BlogType = [
    {
      image: "https://i1.wp.com/css-tricks.com/wp-content/uploads/2021/08/static-dynamic.jpg?resize=1000%2C500&ssl=1",
      tag: "jamstack",
      header: "Static vs. Dynamic vs. Jamstack: Where’s The Line?",
      content: "You’ll often hear developers talking about “static” vs. “dynamic” sites, or you may have heard\
      someone use the term <em>Jamstack</em>. What do these terms mean, and when does a “static” site\
      become either a Jamstack or dynamic site? These …",
      author: "Mike Neumegen",
      authorimage: "https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg",
      date: "Aug 11, 2021"
    },
    {
      image: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/s_698A4A6C4E9352FE08B1ABBB9C1D878C8DDCEFB37B54378FE289FDFE1AA153B1_1627770430038_animated-css-background-generator.png?resize=1024%2C605&ssl=1",
      tag: "",
      header: "Direct link to the article Building a Cool Front End Thing Generator",
      content: "You’ll often hear developers talking about “static” vs. “dynamic” sites, or you may have heard\
      someone use the term <em>Jamstack</em>. What do these terms mean, and when does a “static” site\
      become either a Jamstack or dynamic site? These …",
      author: "Jack Neumegen",
      authorimage: "https://secure.gravatar.com/avatar/3d393e9bdc4460c8ced8b139b8fcdbb7?s=80&d=retro&r=pg",
      date: "Aug 11, 2021"
    },
    {
      image: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/s_698A4A6C4E9352FE08B1ABBB9C1D878C8DDCEFB37B54378FE289FDFE1AA153B1_1627770430038_animated-css-background-generator.png?resize=1024%2C605&ssl=1",
      tag: "",
      header: "Direct link to the article Building a Cool Front End Thing Generator",
      content: "You’ll often hear developers talking about “static” vs. “dynamic” sites, or you may have heard\
      someone use the term <em>Jamstack</em>. What do these terms mean, and when does a “static” site\
      become either a Jamstack or dynamic site? These …",
      author: "Jony Stack",
      authorimage: "https://secure.gravatar.com/avatar/151f5327ae2dac26ba1255335b26ec9a?s=80&d=retro&r=pg",
      date: "Aug 11, 2021"
    },
    {
      image: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/s_698A4A6C4E9352FE08B1ABBB9C1D878C8DDCEFB37B54378FE289FDFE1AA153B1_1627770430038_animated-css-background-generator.png?resize=1024%2C605&ssl=1",
      tag: "",
      header: "Direct link to the article Building a Cool Front End Thing Generator",
      content: "You’ll often hear developers talking about “static” vs. “dynamic” sites, or you may have heard\
      someone use the term <em>Jamstack</em>. What do these terms mean, and when does a “static” site\
      become either a Jamstack or dynamic site? These …",
      author: "Robin Rendle",
      authorimage: "https://css-tricks.com/wp-content/uploads/2019/01/me-black-white-80x80.jpg",
      date: "Aug 11, 2021"
    },


  ];
  constructor() { }

  ngOnInit(): void {
  }
  /*
    img
    tag
    header
    content
    author 
    date
  */

}
