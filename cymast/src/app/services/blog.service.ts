import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Blog } from '../models/Blog';
import { Post } from '../models/Post';
import { Theme } from '../models/BlogTheme';
import { Comment } from '../models/Comment';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  getBlogs(): void {
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

  getTheme(id: number): Observable<Theme> {
    return this.firestore
      .collection('blogTheme')
      .doc(JSON.stringify(id))
      .valueChanges();
  }

  addBlog(newBlog: Blog): Observable<Blog> {
    return this.http.post<Blog>(
      'https://mi-blogs.azurewebsites.net/api/Blogs',
      newBlog
    );
  }

  setTheme(theme: Theme, id: number): void {
    this.firestore
      .collection('blogTheme')
      .doc(JSON.stringify(id))
      .set(Object.assign({}, theme));
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
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(
      `https://mi-blogs.azurewebsites.net/api/Posts/${id}`
    );
  }
  editPost(id: number, updatedPost: Post): Observable<Post> {
    return this.http.put<Post>(
      `https://mi-blogs.azurewebsites.net/api/Posts/${id}`,
      updatedPost
    );
  }
  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(
      `https://mi-blogs.azurewebsites.net/api/Posts/${id}`
    );
  }

  addComment(newComment: Comment): Observable<Comment> {
    return this.http.post<Comment>(
      `https://mi-blogs.azurewebsites.net/api/Comments`,
      newComment
    );
  }
}
