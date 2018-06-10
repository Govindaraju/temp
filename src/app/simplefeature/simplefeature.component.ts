import { Component, OnInit } from '@angular/core';
import { Feature } from '../feature/model/feature';
import { Step } from '../feature/model/step';
import { Util } from '../common/Util';
import { Scenario } from '../feature/model/scenario';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-simplefeature',
  templateUrl: './simplefeature.component.html',
  styleUrls: ['./simplefeature.component.scss']
})
export class SimplefeatureComponent implements OnInit {

  scenarioTextReadonly: boolean;
  scenarioText = "";
  featureText = "";
  stepText = "";
  addFeatureVisible = false;
  showScenarioSection = false;
  showStepSection = false;

  featureObject: Feature;
  currentScenarioObject: Scenario;
  
  constructor() { }

  ngOnInit() {

    this.featureObject = new Feature();
    this.featureObject.id = Util.key();
    this.featureObject.description = "Calculator";

    const scenario1 = new Scenario();
    scenario1.id = Util.key();
    scenario1.description = "Add two numbers";

    const step11 = new Step();
    step11.id = Util.key();
    step11.description = "Given an instance of calculator";

    const step12 = new Step();
    step12.id = Util.key();
    step12.description = "When two numbers 10 and 25 are passed";


    const step13 = new Step();
    step13.id = Util.key();
    step13.description = "And addNumbers method is called";


    const step14 = new Step();
    step14.id = Util.key();
    step14.description = "Then it should return the sum of 35";

    const scenario2 = new Scenario();
    scenario2.id = Util.key();
    scenario2.description = "Multiply two numbers";

    const step21 = new Step();
    step21.id = Util.key();
    step21.description = "Given an instance of calculator";

    const step22 = new Step();
    step22.id = Util.key();
    step22.description = "When two numbers 10 and 25 are passed";

    const step23 = new Step();
    step23.id = Util.key();
    step23.description = "And multiplyNumbers is called";

    const step24 = new Step();
    step24.id = Util.key();
    step24.description = "Then it should return a product of 250";

    scenario1.steps.push(step11);
    scenario1.steps.push(step12);
    scenario1.steps.push(step13);
    scenario1.steps.push(step14);

    scenario2.steps.push(step21);
    scenario2.steps.push(step22);
    scenario2.steps.push(step23);
    scenario2.steps.push(step24);

    this.featureObject.scenarios.push(scenario1);
    this.featureObject.scenarios.push(scenario2);

  }

  showAddFeature() {
    this.addFeatureVisible = true;
  }

  addFeature() {
    // this.features.push(this.featureText);
    // this.featureText = "";
    // this.addFeatureVisible = false;
    // this.showScenarioSection = true;
  }

  doneDisabled() {
    return this.featureText.length == 0;
  }

  enableScenarioSection() {
    this.showStepSection = false;
    this.showScenarioSection = true;
  }

  addScenario() {
    this.currentScenarioObject = new Scenario();
    this.currentScenarioObject.id = Util.key();
    this.currentScenarioObject.description = this.scenarioText;
    this.featureObject.scenarios.push(this.currentScenarioObject);
    this.showScenarioSection = false;
    this.showStepSection = true;
    this.scenarioText = "";
  }

  addStep() {
    const step = new Step();
    step.id = Util.key();
    step.description = this.stepText;
    this.currentScenarioObject.steps.push(step);
    this.stepText = "";
  }

  countOfScenarios() {
    return this.featureObject.scenarios.length;
  }

  allScenarios(): Observable<Scenario[]>{
    return of(this.featureObject.scenarios.reverse());
  }
}
