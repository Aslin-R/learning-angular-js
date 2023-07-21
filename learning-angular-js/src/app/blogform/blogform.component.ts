import { Component } from '@angular/core';
import { BlogserviceService } from '../service/blogservice.service';

@Component({
  selector: 'blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent {

  constructor(private service:BlogserviceService) { 

  }
  insert(blog: any){
    //alert(blog.username)
    console.log('...inserting...');
    this.service.addBlog(blog);
  }
}
