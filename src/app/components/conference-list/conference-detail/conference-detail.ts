import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import type { Conference } from '../../../models/conference';

@Component({
  selector: 'app-conference-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './conference-detail.html',
  styleUrl: './conference-detail.css',
})
export class ConferenceDetail {
  @Input() conference: Conference | null = null;

  @Output() registerEvent = new EventEmitter<Conference>();

  register(): void {
    if (this.conference) {
      this.registerEvent.emit(this.conference);
    }
  }
}