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
import { Comment } from 'src/app/models/Comment';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
  id: number = 0;
  content: string = '';

  @Input() postId: number;

  addCommentForm = this.fb.group({
    content: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private service: BlogService) {}

  ngOnInit(): void {
    console.log(this.postId);
  }
  createComment(): void {
    this.content = this.addCommentForm.value.content;
    let c = new Comment(this.id, this.content, this.postId);
    console.log(c);
    this.service.addComment(c).subscribe((comment) => {
      window.location.reload();
    });
  }
}
