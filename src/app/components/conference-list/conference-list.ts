import { Component } from '@angular/core';
import type { Conference } from '../../models/conference';
import { DatePipe, UpperCasePipe, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConferenceDetail } from './conference-detail/conference-detail';


@Component({
  selector: 'app-conference-list',
  imports: [
    DatePipe,
    UpperCasePipe,
    FormsModule,
    NgClass,
    NgStyle,
    ConferenceDetail
],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  selectedConference: Conference | null = null;
  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular Workshop',
      description: 'Learn Angular from beginner to advanced.',
      date: new Date('2026-12-15'),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 35,
    },
    {
      id: 2,
      title: 'AI Conference',
      description: 'Discover the future of artificial intelligence.',
      date: new Date('2026-12-20'),
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 25,
    },
    {
      id: 3,
      title: 'Web Development Summit',
      description: 'Modern web development technologies.',
      date: new Date('2026-12-25'),
      place: 'Sfax',
      maxParticipants: 20,
      nbParticipants: 20,
    },
  ];

  register(conference: Conference): void {
    if (conference.nbParticipants < conference.maxParticipants) {
      conference.nbParticipants++;
    }
  }


  searchText = '';
  get filteredConferences(): Conference[] {
  return this.conferences.filter(conference =>
    conference.title.toLowerCase().includes(this.searchText.toLowerCase().trim())
  );
}
getRemainingPlaces(conference: Conference): number {
  return conference.maxParticipants - conference.nbParticipants;
}


getButtonClass(conference: Conference): string {
  const remaining = this.getRemainingPlaces(conference);

  if (remaining <= 0) {
    return 'full';
  }

  if (remaining < 10) {
    return 'almost-full';
  }

  return 'available';
}

getStatusColor(conference: Conference): string {
  const remaining = this.getRemainingPlaces(conference);

  if (remaining <= 0) {
    return '#dc2626';
  }

  if (remaining < 10) {
    return '#ea580c';
  }

  return '#16a34a';
}
selectConference(conference: Conference) {
  this.selectedConference = conference;
}
}
