import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chronicle-cover',
  templateUrl: './chronicle-cover.component.html',
  styleUrl: './chronicle-cover.component.scss',
})
export class ChronicleCoverComponent {
  @Output() open = new EventEmitter<void>();
}
