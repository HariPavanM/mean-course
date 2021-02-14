import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/*Injectable takes care of depency injection of this service at
root level for the entire application and it creates one instance of this
Service for entire app*/
@Injectable({providedIn: 'root'})
export class PostsService{
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient){}
  getPosts(){
    this.http.get<{ message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe((postData) => {
    this.posts = postData.posts;
    this.postsUpdated.next([...this.posts]);
    });
  }
getPostUpdateListener(){
  return this.postsUpdated.asObservable();
}
  addPosts(title: string, content: string){

    const post:Post = {id:null, title:title, content:content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);

  }
}
