import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs: Blog[] = [];

  constructor() {}

  getBlogs(): Observable<Blog[]> {
    return of(this.blogs);
  }

  addBlog(newBlog: Blog): void {
    this.blogs.push(newBlog);
  }
}
