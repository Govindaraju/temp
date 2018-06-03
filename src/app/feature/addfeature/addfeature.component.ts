import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfeature',
  templateUrl: './addfeature.component.html',
  styleUrls: ['./addfeature.component.scss']
})
export class AddfeatureComponent implements OnInit {
  addFeatureForm: FormGroup;
  addFeatureEnabled: boolean;
  addScenarioEnabled : boolean;
  addStepEnabled : boolean;

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
    console.log('addScenarioEnabled init ',this.addScenarioEnabled)
  }

  enableAddFeature() {
    this.addFeatureEnabled = true;
  }

  addScenario(){
    console.log('addFeatureForm ',this.addFeatureForm.get('feature').value);
    this.addScenarioEnabled = true;
  }

  addStep() {
    this.addStepEnabled = true;
  }
}
