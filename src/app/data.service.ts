import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['Inicial 1','Inicial 2','Inicial 3']);
  goal = this.goals.asObservable();
  constructor() { }

  changeGoal(goal)
  {
    this.goals.next(goal);
  }
}
