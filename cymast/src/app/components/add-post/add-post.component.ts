import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  id: number = 0;
  title: string = '';
  content: string = '';
  created: Date = new Date();
  modified: Date = new Date();
  blogId: number;
  blog: Blog;

  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('blogId'));
      this.service.getBlog(this.blogId).subscribe((data) => {
        this.blogId = data.id;
        this.blog = data;
        console.log(this.blog);
      });
    });
  }
  changeTitle(t: string): void {
    this.title = t;
    console.log(this.title);
  }

  changeContent(c: string): void {
    this.content = c;
    console.log(this.content);
  }

  createPost(): void {
    let p = new Post(
      this.id,
      this.title,
      this.content,
      this.created,
      this.modified,
      this.blogId,
      this.blog,
      this.comments
    );
    this.service.createPost(p).subscribe((newPost) => {
      this.router.navigate(['blog', this.blogId]);
    });
  }
}
