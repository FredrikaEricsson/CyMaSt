import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Theme } from 'src/app/models/BlogTheme';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent implements OnInit {
  blogs: Blog[] = [];
  id: number = 0;
  title: string;
  created: Date = new Date();
  userId: number = 930404;
  posts: Post[] = [];
  theme: string;

  addBlogForm = this.fb.group({
    title: ['', Validators.required],
    theme: ['', Validators.required],
  });
  constructor(
    private service: BlogService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  setTheme(blog): void {
    this.id = blog.id;
    let t = new Theme(this.id, this.theme);
    this.service.setTheme(t, this.id);
    this.router.navigate(['/']);
  }

  createBlog(): void {
    this.title = this.addBlogForm.value.title;
    this.theme = this.addBlogForm.value.theme;
    let b = new Blog(
      this.id,
      this.title,
      this.created,
      this.userId,
      this.posts
    );

    this.service.addBlog(b).subscribe((newBlog) => {
      this.setTheme(newBlog);
    });
  }
}
