import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  index: number;

  constructor(private service: BlogService, private router: Router) {}

  ngOnInit(): void {}

  deletePost(id): void {
    this.service.deletePost(id).subscribe((data) => {
      window.location.reload();
    });
  }
}
