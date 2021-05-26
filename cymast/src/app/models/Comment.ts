import { Post } from './Post';

export class Comment {
  id: number;
  content: string;
  postId: number;

  constructor(id: number, content: string, postId: number) {
    this.id = id;
    this.content = content;
    this.postId = postId;
  }
}
