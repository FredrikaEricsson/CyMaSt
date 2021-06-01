import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { Comment } from 'src/app/models/Comment';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  id: number;
  blogId: number;
  comments: Comment[] = [];
  theme: string = '';
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  getTheme(): void {
    this.service.getTheme(this.blogId).subscribe((theme) => {
      this.theme = theme.theme;
      (error) => {
        this.theme = 'Default';
      };
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('postId'));
      this.service.getPost(this.id).subscribe(
        (post) => {
          this.blogId = post.blogId;
          this.comments = post.comments;
          this.post = post;
          this.getTheme();
        },
        (error) => {
          this.router.navigate(['/**']);
        }
      );
    });
  }
}
