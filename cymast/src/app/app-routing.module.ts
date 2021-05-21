import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';

const routes: Routes = [
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
