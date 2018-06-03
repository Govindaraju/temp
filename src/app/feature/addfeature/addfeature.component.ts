import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Step } from '../model/step';

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
  steps: Step[] = [];

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
    console.log('addFeatureForm ', this.addFeatureForm.get('feature').value);
    this.addScenarioEnabled = true;
  }

  addStep() {
    this.addStepEnabled = true;
  }

  nextStep(){
    const step = this.addFeatureForm.get("step").value;
    console.log("step text ",step);
    this.addFeatureForm.get("step").setValue(null);
    this.steps.push(step);
    console.log("steps so far ",this.steps);
  }
}
