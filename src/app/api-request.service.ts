import { Injectable } from '@angular/core';
import axios from 'axios'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor() { }

  instance = axios.create({
    baseURL: environment.apiURL,
    headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}
});

  async UserConnect(email: string) {
    let uuid: string = ""
    await this.instance.post('/customer', {email: email})
      .then( async response => {
        uuid = await response.data.id
      })
      .catch(e => {
        console.log(e)
      })
    return uuid
  }

  async generatePost(payload: any) {
    let post: string = ""
    await this.instance.post('/open-ai', {...payload})
      .then( response => {
        post = response.data
      })
      .catch(e => {
        console.log(e)
      })
    return post
  }

  async getLastPost(user: string) {
    let post: string = ""
    await this.instance.get(`/prompt/${user}`)
      .then( response => {
        post = response.data
      })
      .catch(e => {
        console.log(e)
      })
    return post
  }
}
