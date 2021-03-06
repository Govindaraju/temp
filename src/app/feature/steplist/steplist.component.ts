import { of, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Step } from '../model/step';
import { Util } from '../../common/Util';
import { DataSource } from '@angular/cdk/collections';
import { StepDataSource } from '../../common/datasource/stepDataSource';
import { FeatureserviceService } from '../../common/service/featureservice.service';

@Component({
  selector: 'app-steplist',
  templateUrl: './steplist.component.html',
  styleUrls: ['./steplist.component.scss']
})
export class SteplistComponent implements OnInit {

  displayedColumns = ['description', 'buttons'];
  dataSource: StepDataSource;


  constructor(private featureService: FeatureserviceService) { }

  ngOnInit() {
    this.dataSource = new StepDataSource(this.featureService);
    this.dataSource.loadSteps();
  }

  edit(id) {
  }

  delete(id) {
  }

  private step(id) {
    // const filterdStep = this.steps.find(step => step.id === id);
    // console.log('filterd step', filterdStep);
  }

}

