import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl } from '@angular/forms';
import { ApiRequestService } from '../api-request.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  user = new FormControl('');

  constructor(
    private cookieService: CookieService,
    private apiRequestService: ApiRequestService
  ) {}
  async onSubmit() {
    const result = await this.apiRequestService
      .UserConnect(<string>this.user.value)
      .then((res) => {
        if (res != '') {
          localStorage.setItem('user', res);
          window.location.reload();
        }
      });
    console.log(result);
  }
}
