import {Component, Input} from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-ai-response',
  templateUrl: './ai-response.component.html',
  styleUrls: ['./ai-response.component.css']
})
export class AiResponseComponent {

  @Input()
  post?: string;
}
