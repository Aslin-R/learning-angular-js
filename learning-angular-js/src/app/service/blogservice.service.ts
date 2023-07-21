import { Injectable } from '@angular/core';
import { Blog } from '../module/bloghub';
import { blogs } from '../module/blog_list';


@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  blogs: Blog[] ;
  constructor() { 
      this.blogs=blogs;
  }
  addBlog(blog:Blog){
    this.blogs.unshift(blog);
    console.log(this.blogs);
  }
}
