import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class HeroesComponent implements OnInit {
  
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    if (this.selectedHero === hero) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }
  alert(): void {
    alert(`Pshh... You're my hero`);
  }
}
