import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  title: string = '';
  created: Date = new Date();
  userId: number = 930404;
  posts: Post[] = [];
  blogId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));
      this.service.getBlog(this.blogId).subscribe((blog) => {
        this.title = blog.title;
        this.created = blog.created;
        this.userId = blog.userId;
        this.posts = blog.posts;
        this.blogId = blog.id;
      });
    });
  }
}
