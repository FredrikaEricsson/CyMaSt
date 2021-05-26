import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  id: number = 0;
  title: string = '';
  content: string = '';
  created: Date = new Date();
  modified: Date = new Date();
  blogId: number;
  comments: Comment[] = [];

  postForm = this.fb.group({
    editedTitle: [''],
    editedContent: [''],
  });
  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      this.service.getPost(this.id).subscribe((data) => {
        this.title = data.title;
        this.content = data.content;
        this.created = data.created;
        this.blogId = data.blogId;
        this.comments = data.comments;
      });
    });
  }

  editPost(): void {
    if (this.postForm.value.editedTitle === '') {
      this.title;
    } else {
      this.title = this.postForm.value.editedTitle;
    }

    if (this.postForm.value.editedContent === '') {
      this.content;
    } else {
      this.content = this.postForm.value.editedContent;
    }

    let updatedPost = new Post(
      this.id,
      this.title,
      this.content,
      this.created,
      this.modified,
      this.blogId,
      this.comments
    );
    this.service.editPost(this.id, updatedPost).subscribe((data) => {
      this.router.navigate(['blog', this.blogId]);
    });
  }
}
