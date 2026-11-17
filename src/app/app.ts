import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConferenceList } from './components/conference-list/conference-list';
import { Footer } from './components/footer/footer';
import { Friends } from './components/friends/friends';
import { Navbar } from './components/navbar/navbar';
import { Notifications } from './components/notifications/notifications';
import { Profile } from './components/profile/profile';
import { Header } from './components/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Profile, Friends, Notifications, ConferenceList, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
