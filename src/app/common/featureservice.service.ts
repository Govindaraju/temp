import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { Step } from '../feature/model/step';

@Injectable({
  providedIn: 'root'
})
export class FeatureserviceService {

  constructor() { }

  private messageSource = new BehaviorSubject<Step[]>([]);
  steps: Step[] = [];

  updateStep(newStep: Step) {
    this.steps.push(newStep);
    this.messageSource.next(this.steps);
  }

  getSteps(): Observable<Step[]> {
    return this.messageSource.asObservable();
  }
}
