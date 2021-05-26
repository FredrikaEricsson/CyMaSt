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
  title: string;
  content: string;
  created: Date;
  modified: Date;
  blogId: number;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('postId'));
      this.service.getPost(this.id).subscribe((data) => {
        this.title = data.title;
        this.content = data.content;
        this.created = data.created;
        this.modified = data.modified;
        this.blogId = data.blogId;
        this.comments = data.comments;
      });
    });
  }
}
