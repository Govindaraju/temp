import { Component, OnInit } from '@angular/core';
import { FeatureserviceService } from '../../common/service/featureservice.service';
import { ScenarioDataSource } from '../../common/datasource/scenarioDataSource';

@Component({
  selector: 'app-scenariolist',
  templateUrl: './scenariolist.component.html',
  styleUrls: ['./scenariolist.component.scss']
})
export class ScenariolistComponent implements OnInit {

  displayedColumns = ['description', 'noOfSteps','buttons'];
  dataSource: ScenarioDataSource;

  constructor(private featureService: FeatureserviceService) { }

  ngOnInit() {
    this.dataSource = new ScenarioDataSource(this.featureService);
    this.dataSource.loadScenarios();
  }

  edit(id) {
  }

  delete(id) {
  }

  addSteps(id){
    console.log('add steps called ',id)
  }

  private step(id) {
    // const filterdStep = this.steps.find(step => step.id === id);
    // console.log('filterd step', filterdStep);
  }

}
