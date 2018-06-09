import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StepDataSource } from '../../common/datasource/stepDataSource';
import { FeatureserviceService } from '../../common/service/featureservice.service';
import { BridgeService } from '../common/bridge.service';
import { Util } from '../../common/Util';
import { Step } from '../../feature/model/step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  featureBeingEdited: string;
  scenarioBeingEdited: string;
  featureForm: FormGroup;

  displayedColumns = ['description', 'buttons'];

  dataSource: StepDataSource;

  constructor(private featureService: FeatureserviceService, private bridgeService: BridgeService) { }

  ngOnInit() {
    console.log('scenario component loaed');
    this.buildForm();
    this.initialiseDataSource();
    this.bridgeService.selectedFeature.subscribe(featureID => {
      this.featureBeingEdited = featureID;
    });
    this.bridgeService.selectedScenario.subscribe(scenarioID => {
      this.scenarioBeingEdited = scenarioID;
    });
  }

  addStep() {
    const step = new Step();
    step.id = Util.key();
    step.description = this.featureForm.get('step').value;
    this.featureForm.get('step').setValue(null);

    this.featureService.updateStep(this.featureBeingEdited, this.scenarioBeingEdited, step);
  }

  edit(id) {
  }

  delete(id) {
  }

  addStepEnabled() {
    const textValue = this.featureForm.get('step').value;
    return textValue !== null && textValue.length > 0;

  }

  private step(id) {
    // const filterdStep = this.steps.find(step => step.id === id);
    // console.log('filterd step', filterdStep);
  }

  private buildForm() {
    this.featureForm = new FormGroup({
      step: new FormControl('', )
    });
  }

  private initialiseDataSource() {
    this.dataSource = new StepDataSource(this.featureService);
    this.dataSource.loadSteps();
  }

}
