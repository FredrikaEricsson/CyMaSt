import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  {
    path: 'blog/:blogId/post/:postId/comments',
    component: CommentsComponent,
    pathMatch: 'full',
  },
  {
    path: 'blog/:blogId/edit-post/:id',
    component: EditPostComponent,
    pathMatch: 'full',
  },
  {
    path: 'blog/:blogId/new-post',
    component: AddPostComponent,
    pathMatch: 'full',
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit-blog/:id',
    component: EditBlogComponent,
  },
  { path: 'create-blog', component: AddBlogComponent },
  { path: '', component: BlogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
