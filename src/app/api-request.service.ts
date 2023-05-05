import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  instance = axios.create({
    baseURL: environment.apiURL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 100000,
  });

  async UserConnect(email: string) {
    let uuid = '';
    await this.instance
      .post('/customer', { email: email })
      .then((response) => {
        uuid = response.data.id;
      })
      .catch((e) => {
        console.log(e);
      });
    return uuid;
  }

  async generatePost(payload: any) {
    let post = '';
    await this.instance
      .post('/open-ai', { ...payload })
      .then((response) => {
        post = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    return post.trim();
  }

  async getLastsPosts(user: string) {
    let post = '';
    await this.instance
      .get(`/prompt/${user}`)
      .then((response) => {
        post = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    return post;
  }
}
