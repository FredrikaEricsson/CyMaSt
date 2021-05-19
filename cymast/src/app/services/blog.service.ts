import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Blog } from '../models/Blog';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();

  constructor(private http: HttpClient) {}

  getBlogs(): void {
    // return of(this.blogs);

    this.http
      .get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/123')
      .subscribe((data: Blog[]) => {
        this.blogs.next(data);
        console.log(data);
      });
  }

  addBlog(newBlog: Blog): Observable<Blog> {
    // this.blogs.push(newBlog);
    console.log(newBlog);
    return this.http
      .post<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs', newBlog)
      .pipe((response) => {
        console.log(response);
        return response;
      });
  }
}
