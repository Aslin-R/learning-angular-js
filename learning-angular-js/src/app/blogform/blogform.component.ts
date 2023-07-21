import { Component } from '@angular/core';

@Component({
  selector: 'blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent {
  insert(blog: any){
    alert(blog.username)
  }
}
