import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dawi-cover',
  templateUrl: './dawi-cover.component.html',
  styleUrls: [
    '../../../shared/styles/chronicle-cover.scss',
    './dawi-cover.component.scss',
  ],
})
export class DawiCoverComponent {
  @Output() open = new EventEmitter<void>();
}
