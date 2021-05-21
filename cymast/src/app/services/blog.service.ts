import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Blog } from '../models/Blog';

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
      });
  }

  getBlog(id: number): Observable<Blog> {
    return this.http.get<Blog>(
      `https://mi-blogs.azurewebsites.net/api/Blogs/${id}`
    );
  }

  addBlog(newBlog: Blog): Observable<Blog> {
    return this.http
      .post<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs', newBlog)
      .pipe((response) => {
        return response;
      });
  }

  editBlog(id: number, updatedBlog: Blog): Observable<Blog> {
    return this.http.put<Blog>(
      `https://mi-blogs.azurewebsites.net/api/Blogs/${id}`,
      updatedBlog
    );
  }

  deleteBlog(id: number): Observable<Blog> {
    return this.http.delete<Blog>(
      `https://mi-blogs.azurewebsites.net/api/Blogs/${id}`
    );
  }
}
