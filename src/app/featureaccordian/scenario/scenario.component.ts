import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FeatureDataSource } from '../../common/datasource/featureDataSource';
import { FeatureserviceService } from '../../common/service/featureservice.service';
import { Scenario } from '../../feature/model/scenario';
import { Util } from '../../common/Util';
import { ScenarioDataSource } from '../../common/datasource/scenarioDataSource';
import { BridgeService } from '../common/bridge.service';
import { Feature } from '../../feature/model/feature';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {

  featureBeingEdited: string;
  featureForm: FormGroup;

  displayedColumns = ['description', 'noOfScenarios', 'buttons'];

  dataSource: ScenarioDataSource;
  
  constructor(private featureService: FeatureserviceService, private bridgeService: BridgeService) { }

  ngOnInit() {
    console.log('scenario component loaed');
    this.buildForm();
    this.initialiseDataSource();
    this.bridgeService.selectedFeature.subscribe(featureID => {
      this.featureBeingEdited = featureID;
    });
  }

  addScenario() {
    const scenario = new Scenario();
    scenario.id = Util.key();
    scenario.description = this.featureForm.get('scenario').value;
    this.featureForm.get('scenario').setValue(null);

    this.featureService.updateScenario(this.featureBeingEdited, scenario);
  }

  addStep(scenarioID) {
    console.log("addStep called ScenarioComponent component ", scenarioID);
    this.bridgeService.scenarioSelected(scenarioID);
  }

  edit(id) {
  }

  delete(id) {
  }

  addScenarioEnabled() {
    const textValue = this.featureForm.get('scenario').value;
    return textValue !== null && textValue.length > 0;

  }

  private step(id) {
    // const filterdStep = this.steps.find(step => step.id === id);
    // console.log('filterd step', filterdStep);
  }

  private buildForm() {
    this.featureForm = new FormGroup({
      scenario: new FormControl('', )
    });
  }

  private initialiseDataSource() {
    this.dataSource = new ScenarioDataSource(this.featureService);
    this.dataSource.loadScenarios();
  }
}
