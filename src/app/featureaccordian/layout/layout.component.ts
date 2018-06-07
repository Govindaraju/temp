import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../common/bridge.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  pannelToBeExpanded = "FEATURE";

  constructor(private bridgeService: BridgeService) { }

  ngOnInit() {
    this.bridgeService.selectedFeature.subscribe(data => this.onFeatureSelected(data));
  }

  onFeatureSelected(featureID){
    console.log('onFeatureSelected in layout component ',featureID);
    this.pannelToBeExpanded = "SCENARIO";
  }

  setPanel(openedPannel){
    this.pannelToBeExpanded = openedPannel;
  }
}
