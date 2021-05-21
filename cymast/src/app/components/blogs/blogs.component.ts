import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];
  blogId: number = 0;

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service.blogs$.subscribe((data: Blog[]) => {
      this.blogs = data;
    });
    this.service.getBlogs();
  }
  deleteBlog(blogId: number) {
    this.service.deleteBlog(blogId).subscribe((data) => {
      this.service.getBlogs();
    });
  }
}
