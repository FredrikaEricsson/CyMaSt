import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
})
export class EditBlogComponent implements OnInit {
  title: string = '';
  created: Date = new Date();
  userId: number = 930404;
  posts: Post[] = [];
  blogId: number = 0;
  editBlogForm = this.fb.group({
    title: [''],
  });
  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));

      this.service.getBlog(this.blogId).subscribe((blog) => {
        this.editBlogForm.setValue({
          title: blog.title,
        });

        this.created = blog.created;
        this.userId = blog.userId;
        this.posts = blog.posts;
        this.blogId = blog.id;
        console.log(this.title);
      });
    });
  }

  editBlog(): void {
    let updatedBlog = new Blog(
      this.blogId,
      (this.title = this.editBlogForm.value.title),
      this.created,
      this.userId,
      this.posts
    );
    this.service.editBlog(this.blogId, updatedBlog).subscribe((editedBlog) => {
      this.router.navigate(['/']);
    });
  }
}
