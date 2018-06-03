import { Component, OnInit } from '@angular/core';
import { Step } from '../model/step';

@Component({
  selector: 'app-steplist',
  templateUrl: './steplist.component.html',
  styleUrls: ['./steplist.component.scss']
})
export class SteplistComponent implements OnInit {

  steps: Step[] = [
    { id: 1, prefix: 'Given', description: 'An instance of a calculator' },
    { id: 2, prefix: 'when', description: 'Two integers 5, and 8 are passed Two integers 5, and 8 are passed' },
    { id: 3, prefix: 'And', description: 'addNumbers is called' },
    { id: 4, prefix: 'Then', description: 'I should get 13 as the sum' },
  ];

  displayedColumns = ['prefix', 'description','buttons'];
  dataSource = this.steps;

  constructor() { }

  ngOnInit() {
  }

  edit(id) {
    console.log('id', id);
    this.step(id);
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
