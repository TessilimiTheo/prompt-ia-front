import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiRequestService } from '../api-request.service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css'],
})
export class CreatePostFormComponent {
  createPostForm = new FormGroup({
    label: new FormControl('', Validators.required),
    theme: new FormControl('', Validators.required),
    isArticle: new FormControl('false'),
    maxLength: new FormControl('', Validators.required),
    tonality: new FormControl('Amicale'),
    hashtags: new FormControl(''),
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
    Object.keys(this.createPostForm.controls).forEach((field) => {
      const control = this.createPostForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.createPostForm.valid) {
      const payload = {
        label: this.createPostForm.value.label,
        theme: this.createPostForm.value.theme,
        isArticle: this.createPostForm.value.isArticle == 'true',
        contentLength: Number(this.createPostForm.value.maxLength),
        tonality: this.createPostForm.value.tonality,
        hashtags:
          this.createPostForm.value.hashtags?.toString().split(';') ?? [],
        user: this.user,
      };
      this.isLoading = true;
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
  }

  updateFormData(value: string): void {
    const formDataObject = JSON.parse(value);
    this.createPostForm.patchValue({
      theme: formDataObject.theme,
      hashtags: formDataObject.hashtags,
      maxLength: formDataObject.contentLength,
      isArticle: formDataObject.isArticle.toString(),
      tonality: formDataObject.tonality,
    });
  }
}
