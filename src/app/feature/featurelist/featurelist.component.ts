import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featurelist',
  templateUrl: './featurelist.component.html',
  styleUrls: ['./featurelist.component.scss']
})
export class FeaturelistComponent implements OnInit {

  show = true;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    console.log('called');
    this.show = !this.show;
  }

}
