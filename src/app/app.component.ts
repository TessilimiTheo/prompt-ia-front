import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatePostFormComponent } from './create-post-form/create-post-form.component';
import { LastPromptListComponent } from './last-prompt-list/last-prompt-list.component';
import { AiResponseComponent } from './ai-response/ai-response.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ai-front';
  user?: string | null;
  post?: string;
  @ViewChild(CreatePostFormComponent)
  private createPostFormComponent?: CreatePostFormComponent;
  @ViewChild(LastPromptListComponent)
  private lastPromptListComponent?: LastPromptListComponent;

  @ViewChild(AiResponseComponent)
  private aiResponseComponent?: AiResponseComponent;

  ngOnInit(): void {
    this.user = localStorage.getItem('user') ?? null;
  }

  newPost(value: string) {
    this.post = value;
    this.lastPromptListComponent?.ngOnInit();
  }

  updateFormOptions(value: string) {
    this.createPostFormComponent?.updateFormData(value);
  }
  updateResult(value: string) {
    this.aiResponseComponent?.updateResult(value);
  }
}
