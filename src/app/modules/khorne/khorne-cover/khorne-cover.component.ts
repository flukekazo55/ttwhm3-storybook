import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-khorne-cover',
  templateUrl: './khorne-cover.component.html',
  styleUrls: [
    '../../../shared/styles/chronicle-cover.scss',
    './khorne-cover.component.scss',
  ],
})
export class KhorneCoverComponent {
  @Output() open = new EventEmitter<void>();
}
