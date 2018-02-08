import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css']
})
export class MarvelHeroesComponent implements OnInit {

  heroes = ['Iron Man', 'Spider Man', 'Black Panther', 'Ant Man'];
  inputHero = null;
  btnDisable = false;
  Adding = false;

  ChangeHero() {
    this.heroes = this.inputHero;
    this.inputHero = null;
  }

  AddMore() {
    this.Adding = !this.Adding;
  }

  constructor() { }

  ngOnInit() {
  }

}
