import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Step } from '../model/step';
import { Util } from '../../common/Util';
import { Feature } from '../model/feature';
import { Scenario } from '../model/scenario';
import { FeatureserviceService } from '../../common/service/featureservice.service';


@Component({
  selector: 'app-addfeature',
  templateUrl: './addfeature.component.html',
  styleUrls: ['./addfeature.component.scss']
})
export class AddfeatureComponent implements OnInit {
  addFeatureForm: FormGroup;
  feature: Feature = new Feature();
  currentScenario: Scenario = new Scenario();

  showFeatureSection = true;
  showScenarioSection = false;
  disableAddScenario = false;
  showStepSection = false;

  constructor(private featureService: FeatureserviceService) { }

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
 
  }

  addFeature() {
    this.feature = new Feature();
    this.feature.id = Util.key();
    this.feature.description = this.addFeatureForm.get('feature').value;

    this.showFeatureSection = false;
    this.showScenarioSection = true;

  }

  addScenario() {
    this.currentScenario = new Scenario();
    this.currentScenario.id = Util.key();
    this.currentScenario.description = this.addFeatureForm.get('scenario').value;
    this.feature.scenarios.push(this.currentScenario);

    this.featureService.updateScenario({ ...this.currentScenario });

    this.disableAddScenario = true;
    this.showStepSection = true;


  }

  addStep() {
    const step = new Step();
    step.id = Util.key();
    step.description = this.addFeatureForm.get("step").value;

    this.currentScenario.steps.push(step);

    this.addFeatureForm.get("step").setValue(null);

    this.featureService.updateStep({ ...step });
  }

  stepsExist() {
    return this.currentScenario.steps.length > 0;
  }

  scenariosExist() {
    return this.feature.scenarios.length > 0;
  }
}
