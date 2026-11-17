import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links=[
    {name:'Accueil', href:'#'},
    {name:'Profil', href:'#profil'},
    {name:'Conférences', href:'#conference-list'},
    {name:'Détail', href:'#conference'},
    {name:'Amis', href:'#amis'},
    {name:'Notifications', href:'#notifications'}
  ]
}
