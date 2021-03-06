import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add("Fetching heroes");
    return of(HEROES);
  }
}
