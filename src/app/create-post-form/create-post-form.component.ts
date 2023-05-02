import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiRequestService } from '../api-request.service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css'],
})
export class CreatePostFormComponent {
  createPostForm = new FormGroup({
    label: new FormControl(''),
    theme: new FormControl(''),
    isArticle: new FormControl('false'),
    maxLength: new FormControl(''),
    tonality: new FormControl('Amicale'),
    hashtag: new FormControl(''),
  });

  @Input()
  user?: string;

  @Output()
  post = new EventEmitter<string>();
  @Input()
  formOptions?: string;
  isLoading = false;

  constructor(private apiRequestService: ApiRequestService) {}

  generatePost() {
    const payload = {
      label: this.createPostForm.value.label,
      theme: this.createPostForm.value.theme,
      isArticle: this.createPostForm.value.isArticle == 'true',
      contentLength: Number(this.createPostForm.value.maxLength),
      tonality: this.createPostForm.value.tonality,
      hashtag: this.createPostForm.value.hashtag?.toString().split(';'),
      user: this.user,
    };
    this.isLoading = true;
    console.log(this.isLoading);
    this.apiRequestService
      .generatePost(payload)
      .then((res) => {
        console.log(res);
        this.post.emit(res);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  updateFormData(value: string): void {
    console.log(value);
    const formDataObject = JSON.parse(value);
    this.createPostForm.patchValue({
      theme: formDataObject.theme,
      hashtag: formDataObject.hashtag,
      maxLength: formDataObject.contentLength,
      isArticle: formDataObject.isArticle.toString(),
      tonality: formDataObject.tonality,
    });
  }
}
