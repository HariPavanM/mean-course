import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']

})
export class PostCreateComponent {
  enteredTitle:string = '';
  enteredContent:string = '';


  constructor(public postsService: PostsService){};
  //This function gets called whenever post is submitted
    onAddPost(form: NgForm){
      if(form.invalid){
        return;
      }
    this.postsService.addPosts(form.value.title, form.value.content);
    form.resetForm();
    }
}
