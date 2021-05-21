import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
})
export class EditBlogComponent implements OnInit {
  title: string = '';
  created: Date = new Date();
  userId: number = 123;
  posts: string[] = [];
  blogId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));
      this.service.getBlog(this.blogId).subscribe((data) => {
        this.title = data.title;
        this.created = data.created;
        this.userId = data.userId;
        this.posts = data.posts;
        this.blogId = data.id;
        console.log(this.title);
      });
    });
  }

  changeName(t: string): void {
    this.title = t;
  }

  editBlog(): void {
    let updatedBlog = new Blog(
      this.blogId,
      this.title,
      this.created,
      this.userId,
      this.posts
    );
    this.service.editBlog(this.blogId, updatedBlog).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
