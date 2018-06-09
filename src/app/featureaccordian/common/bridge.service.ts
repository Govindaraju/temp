import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Feature } from '../../feature/model/feature';
import { FeatureserviceService } from '../../common/service/featureservice.service';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {


  public selectedFeature = new Subject<string>();
  public selectedScenario = new Subject<string>();

  constructor() { }

  featureSelected(featureID) {
    console.log("featureSelected in BridgeService", featureID);
    this.selectedFeature.next(featureID);
  }

  scenarioSelected(scenarioID) {
    console.log("scenarioSelected in BridgeService", scenarioID);
    this.selectedScenario.next(scenarioID);
  }

}
