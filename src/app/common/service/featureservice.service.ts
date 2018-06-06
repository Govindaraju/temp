import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { Feature } from '../../feature/model/feature';
import { Scenario } from '../../feature/model/scenario';
import { Step } from '../../feature/model/step';

@Injectable({
  providedIn: 'root'
})
export class FeatureserviceService {

  constructor() { }

  private featureSource = new BehaviorSubject<Feature[]>([]);
  private scenariosSource = new BehaviorSubject<Scenario[]>([]);
  private stepsSource = new BehaviorSubject<Step[]>([]);

  features: Feature[] = [];
  scenarios: Scenario[] = [];
  steps: Step[] = [];

  updateFeature(newFeature: Feature) {
    this.features.push(newFeature);
    this.featureSource.next(this.features);
  }

  updateScenario(newScenario: Scenario) {
    this.scenarios.push(newScenario);
    this.scenariosSource.next(this.scenarios);
  }

  updateStep(newStep: Step) {
    this.steps.push(newStep);
    this.stepsSource.next(this.steps);
  }

  getFeatures(): Observable<Feature[]> {
    return this.featureSource.asObservable();
  }

  getScenarios(): Observable<Scenario[]> {
    return this.scenariosSource.asObservable();
  }

  getSteps(): Observable<Step[]> {
    return this.stepsSource.asObservable();
  }

}
