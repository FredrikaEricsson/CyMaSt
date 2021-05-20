import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlogsComponent } from './components/blogs/blogs.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';

@NgModule({
  declarations: [AppComponent, BlogsComponent, AddBlogComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}