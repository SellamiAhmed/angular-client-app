import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  imports: [],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friends = [
    { name: 'Alice', email: 'Alice@example.com', status: 'En ligne' },
    { name: 'Bob', email: 'Bob@example.com', status: 'Hors ligne' },
    { name: 'Charlie', email: 'Charlie@example.com', status: 'En ligne' },
  ];
}
