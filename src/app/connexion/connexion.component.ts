import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiRequestService } from '../api-request.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  });

  constructor(
    private cookieService: CookieService,
    private apiRequestService: ApiRequestService
  ) {}
  async onSubmit() {
    Object.keys(this.userForm.controls).forEach((field) => {
      const control = this.userForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.userForm.valid) {
      await this.apiRequestService
      .UserConnect(<string>this.userForm.value.email)
      .then((res) => {
        if (res != '') {
          localStorage.setItem('post-ai-user', res);
          window.location.reload();
        }
      });
    }
  }
}
