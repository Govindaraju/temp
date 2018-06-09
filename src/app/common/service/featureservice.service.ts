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

  private features: Feature[] = [];


  updateFeature(newFeature: Feature) {
    this.features.push(newFeature);
    this.featureSource.next(this.features);
  }

  updateScenario(featureBeingEdited: string, newScenario: Scenario) {
    const feature = this.feature(featureBeingEdited);
    feature.scenarios.push(newScenario);
    this.scenariosSource.next(feature.scenarios);
  }

  updateStep(featureBeingEdited:string,scenarioBeingEdited:string, newStep: Step) {
    const feature = this.feature(featureBeingEdited);
    const scenario = this.scenario(feature,scenarioBeingEdited);
    scenario.steps.push(newStep);
    this.stepsSource.next(scenario.steps);
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

  feature(id) {
    return this.features.find(feature => feature.id === id);
  }

  scenario(feature:Feature,id:string) {
    return feature.scenarios.find(scenario => scenario.id === id);
  }
}
