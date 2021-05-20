import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent implements OnInit {
  blogs: Blog[] = [];
  id: number = 0;
  title: string = '';
  created: Date = new Date();
  userId: number = 123;
  posts: string[] = [];

  constructor(private service: BlogService) {}

  ngOnInit(): void {}

  changeName(t: string): void {
    this.title = t;
  }

  createBlog(): void {
    console.log(this.created);
    let b = new Blog(
      this.id,
      this.title,
      this.created,
      this.userId,
      this.posts
    );

    this.service.addBlog(b).subscribe((newBlog) => {
      this.service.getBlogs();
    });
  }
}
