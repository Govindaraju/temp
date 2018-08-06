import { Component, OnInit } from '@angular/core';
import { Feature } from '../feature/model/feature';
import { Util } from '../common/Util';
import { Scenario } from '../feature/model/scenario';
import { Step } from '../feature/model/step';

@Component({
  selector: 'app-runfeature',
  templateUrl: './runfeature.component.html',
  styleUrls: ['./runfeature.component.scss']
})
export class RunfeatureComponent implements OnInit {

  features: Feature[] = [];
  currentFeature: Feature;
  color = "primary";
  mode = "Determinate";
  value=50;

  constructor() { }

  ngOnInit() {
    this.getAllFeatures();
  }

  getAllFeatures() {

    const feature1 = new Feature();
    feature1.id = Util.key();
    feature1.description = "feature1";

    const feature2 = new Feature();
    feature2.id = Util.key();
    feature2.description = "feature2";

    const feature3 = new Feature();
    feature3.id = Util.key();
    feature3.description = "feature3";

    const scenario1 = new Scenario();
    scenario1.id = Util.key();
    scenario1.description = "scenario1";

    const scenario2 = new Scenario();
    scenario2.id = Util.key();
    scenario2.description = "scenario2";

    const scenario3 = new Scenario();
    scenario3.id = Util.key();
    scenario3.description = "scenario3";

    const scenario4 = new Scenario();
    scenario4.id = Util.key();
    scenario4.description = "scenario4";

    const scenario5 = new Scenario();
    scenario5.id = Util.key();
    scenario5.description = "scenario5";

    const scenario6 = new Scenario();
    scenario6.id = Util.key();
    scenario6.description = "scenario6";

    const scenario7 = new Scenario();
    scenario7.id = Util.key();
    scenario7.description = "scenario7";

    const scenario8 = new Scenario();
    scenario8.id = Util.key();
    scenario8.description = "scenario8";

    const scenario9 = new Scenario();
    scenario9.id = Util.key();
    scenario9.description = "scenario9";

    const scenario10 = new Scenario();
    scenario10.id = Util.key();
    scenario10.description = "scenario10";

    const scenario11 = new Scenario();
    scenario11.id = Util.key();
    scenario11.description = "scenario11";

    const scenario12 = new Scenario();
    scenario12.id = Util.key();
    scenario12.description = "scenario12";

    const scenario13 = new Scenario();
    scenario13.id = Util.key();
    scenario13.description = "scenario13";

    const scenario14 = new Scenario();
    scenario14.id = Util.key();
    scenario14.description = "scenario14";

    const scenario15 = new Scenario();
    scenario15.id = Util.key();
    scenario15.description = "scenario15";

    const step1 = new Step();
    step1.id = Util.key();
    step1.description = "step1";

    const step2 = new Step();
    step2.id = Util.key();
    step2.description = "step2";

    const step3 = new Step();
    step3.id = Util.key();
    step3.description = "step3";

    const step4 = new Step();
    step4.id = Util.key();
    step4.description = "step4";

    const step5 = new Step();
    step5.id = Util.key();
    step5.description = "step5";

    const step6 = new Step();
    step6.id = Util.key();
    step6.description = "step6";

    const step7 = new Step();
    step7.id = Util.key();
    step7.description = "step7";

    const step8 = new Step();
    step8.id = Util.key();
    step8.description = "step8";

    const step9 = new Step();
    step9.id = Util.key();
    step9.description = "step9";

    const step10 = new Step();
    step10.id = Util.key();
    step10.description = "step10";

    const step11 = new Step();
    step11.id = Util.key();
    step11.description = "step11";

    const step12 = new Step();
    step12.id = Util.key();
    step12.description = "step12";

    const step13 = new Step();
    step13.id = Util.key();
    step13.description = "step13";

    const step14 = new Step();
    step14.id = Util.key();
    step14.description = "step14";

    const step15 = new Step();
    step15.id = Util.key();
    step15.description = "step15";

    const step16 = new Step();
    step16.id = Util.key();
    step16.description = "step16";

    const step17 = new Step();
    step17.id = Util.key();
    step17.description = "step17";

    const step18 = new Step();
    step18.id = Util.key();
    step18.description = "step18";

    const step19 = new Step();
    step19.id = Util.key();
    step19.description = "step19";

    const step20 = new Step();
    step20.id = Util.key();
    step20.description = "step20";

    const step21 = new Step();
    step21.id = Util.key();
    step21.description = "step21";

    const step22 = new Step();
    step22.id = Util.key();
    step22.description = "step22";

    const step23 = new Step();
    step23.id = Util.key();
    step23.description = "step23";

    const step24 = new Step();
    step24.id = Util.key();
    step24.description = "step24";

    const step25 = new Step();
    step25.id = Util.key();
    step25.description = "step25";

    const step26 = new Step();
    step26.id = Util.key();
    step26.description = "step26";

    const step27 = new Step();
    step27.id = Util.key();
    step27.description = "step27";

    const step28 = new Step();
    step28.id = Util.key();
    step28.description = "step28";

    const step29 = new Step();
    step29.id = Util.key();
    step29.description = "step29";

    const step30 = new Step();
    step30.id = Util.key();
    step30.description = "step30";

    const step31 = new Step();
    step31.id = Util.key();
    step31.description = "step31";

    const step32 = new Step();
    step32.id = Util.key();
    step32.description = "step32";

    const step33 = new Step();
    step33.id = Util.key();
    step33.description = "step33";

    const step34 = new Step();
    step34.id = Util.key();
    step34.description = "step34";

    const step35 = new Step();
    step35.id = Util.key();
    step35.description = "step35";

    const step36 = new Step();
    step36.id = Util.key();
    step36.description = "step36";

    const step37 = new Step();
    step37.id = Util.key();
    step37.description = "step37";

    const step38 = new Step();
    step38.id = Util.key();
    step38.description = "step38";

    const step39 = new Step();
    step39.id = Util.key();
    step39.description = "step39";

    scenario1.steps.push(step1);
    scenario1.steps.push(step2);
    scenario1.steps.push(step3);

    scenario2.steps.push(step4);
    scenario2.steps.push(step5);
    scenario2.steps.push(step6);

    scenario3.steps.push(step7);
    scenario3.steps.push(step8);
    scenario3.steps.push(step9);

    scenario4.steps.push(step10);
    scenario4.steps.push(step11);
    scenario4.steps.push(step12);

    scenario5.steps.push(step13);
    scenario5.steps.push(step14);
    scenario5.steps.push(step15);

    scenario6.steps.push(step16);
    scenario6.steps.push(step17);
    scenario6.steps.push(step18);

    scenario7.steps.push(step19);
    scenario7.steps.push(step20);
    scenario7.steps.push(step21);

    scenario8.steps.push(step22);
    scenario8.steps.push(step23);
    scenario8.steps.push(step24);

    scenario9.steps.push(step25);
    scenario9.steps.push(step26);
    scenario9.steps.push(step27);

    scenario10.steps.push(step28);
    scenario10.steps.push(step29);
    scenario10.steps.push(step30);

    scenario11.steps.push(step31);
    scenario11.steps.push(step32);
    scenario11.steps.push(step33);

    scenario12.steps.push(step34);
    scenario12.steps.push(step35);
    scenario12.steps.push(step36);

    scenario13.steps.push(step37);
    scenario13.steps.push(step38);
    scenario13.steps.push(step39);

    feature1.scenarios.push(scenario1);
    feature1.scenarios.push(scenario2);
    feature1.scenarios.push(scenario3);
    feature1.scenarios.push(scenario4);
    feature1.scenarios.push(scenario5);

    feature2.scenarios.push(scenario6);
    feature2.scenarios.push(scenario7);
    feature2.scenarios.push(scenario8);
    feature2.scenarios.push(scenario9);
    feature2.scenarios.push(scenario10);

    feature3.scenarios.push(scenario11);
    feature3.scenarios.push(scenario12);
    feature3.scenarios.push(scenario13);
    feature3.scenarios.push(scenario14);
    feature3.scenarios.push(scenario15);

    this.features.push(feature1);
    this.features.push(feature2);
    this.features.push(feature3);
  }

  featureSelected(featureId) {
    this.currentFeature = this.filterFeature(featureId);
  }

  filterFeature(featureId) {
    return this.features.find(feature => feature.id === featureId);
  }

  currentFeatureDescription() {
    if (this.currentFeature != null) {
      return this.currentFeature.description;
    }
    return "";
  }

  isCurrentFeatureValid() {
    return this.currentFeature != null;
  }


}
