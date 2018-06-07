import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FeatureserviceService } from '../../common/service/featureservice.service';
import { FeatureDataSource } from '../../common/datasource/featureDataSource';
import { BridgeService } from "../common/bridge.service";
import { Feature } from '../../feature/model/feature';
import { Util } from '../../common/Util';

@Component({
  selector: 'app-acc-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  featureForm: FormGroup;

  displayedColumns = ['description', 'noOfScenarios', 'buttons'];
  dataSource: FeatureDataSource;

  constructor(private featureService: FeatureserviceService, private bridgeService: BridgeService) { }

  ngOnInit() {
    this.buildForm();
    this.initialiseDataSource();
  }

  addFeature() {
    const feature = new Feature();
    feature.id = Util.key();
    feature.description = this.featureForm.get('feature').value;
    this.featureForm.get('feature').setValue(null);

    this.featureService.updateFeature(feature);

  }

  addScenario(featureID) {
    console.log("addScenario called feature component ", featureID);
    this.bridgeService.featureSelected(featureID);
  }

  edit(id) {
  }

  delete(id) {
  }

  addFeatureEnabled() {
    const textValue = this.featureForm.get('feature').value;
    return textValue !== null && textValue.length > 0;

  }

  private step(id) {
    // const filterdStep = this.steps.find(step => step.id === id);
    // console.log('filterd step', filterdStep);
  }

  private buildForm() {
    this.featureForm = new FormGroup({
      feature: new FormControl('', )
    });
  }

  private initialiseDataSource() {
    this.dataSource = new FeatureDataSource(this.featureService);
    this.dataSource.loadFeatures();
  }
}
