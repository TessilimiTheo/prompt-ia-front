import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiRequestService } from '../api-request.service';

@Component({
  selector: 'app-last-prompt-list',
  templateUrl: './last-prompt-list.component.html',
  styleUrls: ['./last-prompt-list.component.css'],
})
export class LastPromptListComponent implements OnInit {
  constructor(private apiRequestService: ApiRequestService) {}

  @Input()
  user = '';
  lastPromptList?: Array<any>;
  @Output()
  formOptions = new EventEmitter<string>();
  @Output()
  postResponse = new EventEmitter<string>();

  ngOnInit(): void {
    this.refreshLastPost();
  }

  refreshLastPost() {
    this.apiRequestService.getLastsPosts(this.user).then((res) => {
      this.lastPromptList = Array.from(res);
    });
  }

  refreshFormData(options: string, result: string) {
    this.formOptions.emit(options);
    this.postResponse.emit(result);
  }
}
