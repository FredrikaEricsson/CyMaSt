import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Blog } from '../models/Blog';
import { Post } from '../models/Post';

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
      .get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/930404')
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
    return this.http.post<Blog>(
      'https://mi-blogs.azurewebsites.net/api/Blogs',
      newBlog
    );
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
  createPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(
      'https://mi-blogs.azurewebsites.net/api/Posts',
      newPost
    );
  }
}
