//import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, OnDestroy, OnInit} from '@angular/core';
//import { from } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import{ Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
// posts = [
//   // {title: 'First Post', content:'This is my first post'},
//   // {title: 'Second Post', content:'This is my Second post'},
//   // {title: 'Third Post', content:'This is my Third post'},
// ];
posts: Post[] = [];
private postsSub: Subscription;
/*The public key word creates a new property
postsService of service-type: PostsService and
it would make it available in the current class*/
constructor(public postsService: PostsService){}
ngOnInit(){
this.postsService.getPosts();
 this.postsSub = this.postsService.getPostUpdateListener()
  .subscribe((posts:Post[] )=>{
    this.posts = posts;
  });
}
//This will destroy the subscrition whenever
//the component is not included in the DOM so as to prevent memory leakages
ngOnDestroy (){
  this.postsSub.unsubscribe();
}
}
