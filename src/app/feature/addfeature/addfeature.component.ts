import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Step } from '../model/step';
import { Feature } from '../model/feature';
import { Scenario } from '../model/scenario';
import { Util } from '../../common/Util';

@Component({
  selector: 'app-addfeature',
  templateUrl: './addfeature.component.html',
  styleUrls: ['./addfeature.component.scss']
})
export class AddfeatureComponent implements OnInit {
  addFeatureForm: FormGroup;
  addFeatureEnabled: boolean;
  addScenarioEnabled: boolean;
  addStepEnabled: boolean;
  feature: Feature;
  currentScenario: Scenario;

  constructor() { }

  ngOnInit() {
    this.addFeatureForm = new FormGroup({
      feature: new FormControl('', {
        validators: [Validators.required]
      }),
      scenario: new FormControl('', {
        validators: [Validators.required]
      }),
      step: new FormControl('')
    });
    console.log('addScenarioEnabled init ', this.addScenarioEnabled)
  }

  enableAddFeature() {
    this.addFeatureEnabled = true;
  }

  addScenario() {
    this.feature = new Feature();
    this.feature.id = Util.key();
    this.feature.description = this.addFeatureForm.get('feature').value;
    console.log('addFeatureForm : feature', this.feature);
    this.addScenarioEnabled = true;
  }

  addStep() {
    this.currentScenario = new Scenario();
    this.currentScenario.id = Util.key();
    this.currentScenario.description = this.addFeatureForm.get('scenario').value;
    this.feature.scenarios.push(this.currentScenario);
    this.addStepEnabled = true;
  }

  nextStep() {
    const step = this.addFeatureForm.get("step").value;
    console.log("step text ", step);
    this.addFeatureForm.get("step").setValue(null);
    this.currentScenario.steps.push(step);
    console.log("steps so far ", this.currentScenario.steps);
  }
}
