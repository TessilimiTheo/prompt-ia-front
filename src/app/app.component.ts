import {Component, OnInit, ViewChild} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {CreatePostFormComponent} from "./create-post-form/create-post-form.component";
import {LastPromptListComponent} from "./last-prompt-list/last-prompt-list.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'ai-front';
  user?: string | null | undefined;
  post?: string = "ceci est un long poste générer parr chatGPT";
  @ViewChild(CreatePostFormComponent)
  private createPostFormComponent?: CreatePostFormComponent
  @ViewChild(LastPromptListComponent)
  private lastPromptListComponent?: LastPromptListComponent

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.user = localStorage.getItem("user") != null  ? localStorage.getItem("user") : undefined
  }


  newPost(value: string) {
    this.post = value;
    this.lastPromptListComponent?.ngOnInit()
  }

  updateFormOptions(value: string){
    this.createPostFormComponent?.updateFormData(value);
  }
}
