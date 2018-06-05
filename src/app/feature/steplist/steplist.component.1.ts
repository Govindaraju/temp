import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


import { Step } from '../model/step';
import { Util } from '../../common/Util';
import { of, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-steplist',
  templateUrl: './steplist.component.html',
  styleUrls: ['./steplist.component.scss']
})
export class SteplistComponent implements OnInit {

  steps: Step[] = [
    { id: "1", prefix: 'Given', description: 'An instance of a calculator' },
    { id: "2", prefix: 'when', description: 'Two integers 5, and 8 are passed Two integers 5, and 8 are passed' },
    { id: "3", prefix: 'And', description: 'addNumbers is called' },
    { id: "4", prefix: 'Then', description: 'I should get 13 as the sum' },
  ];

  displayedColumns = ['prefix', 'description','buttons'];
  dataSource = new FeatureDataSource();

  constructor() { }

  ngOnInit() {
  }

  edit(id) {
    console.log('id', id);
    this.step(id);
    const step = new Step();
    step.id = Util.key();
    step.description = "added new description";
    this.steps.push(step); 
    console.log('steps ',this.steps);
  }

  delete(id) {
    console.log('id', id);
    this.step(id);
  }

  private step(id){
    const filterdStep = this.steps.find(step => step.id === id);
    console.log('filterd step',filterdStep);
  }

}

export class FeatureDataSource extends DataSource<any> {
  // constructor(private userService: UserService) {
  //   super();
  // }

  steps: Step[] = [
    { id: "1", prefix: 'Given', description: 'An instance of a calculator' },
    { id: "2", prefix: 'when', description: 'Two integers 5, and 8 are passed Two integers 5, and 8 are passed' },
    { id: "3", prefix: 'And', description: 'addNumbers is called' },
    { id: "45", prefix: 'Then', description: 'I should get 213 as the sum' },
  ];

  connect(): Observable<Step[]> {
    return of(this.steps);
  }

  disconnect() {}
}
