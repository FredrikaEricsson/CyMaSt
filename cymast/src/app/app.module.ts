import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BlogsComponent } from './components/blogs/blogs.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const config = {
  apiKey: 'AIzaSyCY7f1h4HDUJ0PJBgffmO9ALsKedrNSJwI',
  authDomain: 'cymast.firebaseapp.com',
  projectId: 'cymast',
  storageBucket: 'cymast.appspot.com',
  messagingSenderId: '1043513112344',
  appId: '1:1043513112344:web:84fc2d41c29922a31e906d',
};

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    AddBlogComponent,
    EditBlogComponent,
    BlogComponent,
    PostComponent,
    AddPostComponent,
    EditPostComponent,
    CommentsComponent,
    CommentComponent,
    AddCommentComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
