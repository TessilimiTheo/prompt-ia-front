import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ai-response',
  templateUrl: './ai-response.component.html',
  styleUrls: ['./ai-response.component.css'],
})
export class AiResponseComponent {
  @Input()
  post?: string;

  updateResult(result: string) {
    this.post = result.trim();
  }
}
