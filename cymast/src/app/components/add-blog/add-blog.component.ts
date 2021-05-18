import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent implements OnInit {
  name: string = '';

  constructor(private service: BlogService) {}

  ngOnInit(): void {}

  changeName(n: string): void {
    this.name = n;
  }
  createBlog(): void {
    let b = new Blog(this.name);

    this.service.addBlog(b);
  }
}
