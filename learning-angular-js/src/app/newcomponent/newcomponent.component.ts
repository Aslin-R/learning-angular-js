import { Component } from '@angular/core';
import { blogs } from '../module/blog_list';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})

export class NewcomponentComponent {

  blogs:any;

  constructor() {
  }
  ngOnInit() {
    this.blogs=blogs;
  }
  languages:any[] = [
  {name:'python', value:'python'},
  {name:'java', value:'java'},
  {name:'c', value:'c'},
  {name:'c++', value:'c++'},
  {name:'javascript', value:'javascript'},
  {name:'php', value:'php'},
  ];
}
