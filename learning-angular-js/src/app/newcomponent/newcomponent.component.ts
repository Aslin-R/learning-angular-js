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
 
}
