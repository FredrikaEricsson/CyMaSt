import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { Comment } from 'src/app/models/Comment';
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
  comments: Comment[] = [];

  addPostForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('blogId'));
    });
  }

  createPost(): void {
    this.title = this.addPostForm.value.title;
    this.content = this.addPostForm.value.content;
    let p = new Post(
      this.id,
      this.title,
      this.content,
      this.created,
      this.modified,
      this.blogId,
      this.comments
    );
    this.service.createPost(p).subscribe((newPost) => {
      this.router.navigate(['blog', this.blogId]);
      console.log(newPost);
    });
  }
}
