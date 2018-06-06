import { DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";

import { Scenario } from "../../feature/model/scenario";
import { FeatureserviceService } from "../service/featureservice.service";

export class ScenarioDataSource extends DataSource<Scenario> {

    private scenarioSubject = new BehaviorSubject<Scenario[]>([]);
    private loadingScenarioSubject = new BehaviorSubject<boolean>(false);
    public loadingScenario$ = this.loadingScenarioSubject.asObservable();

    constructor(private featureService: FeatureserviceService) {
        super();
    }

    loadScenarios() {
        console.log('loadScenarios called ');
        this.loadingScenarioSubject.next(true);
        this.featureService.getScenarios().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingScenarioSubject.next(false))
        )
        .subscribe(scenarios => this.scenarioSubject.next(scenarios));
    }

    connect(): Observable<Scenario[]> {
        console.log('loadScenarios connected');
        return this.scenarioSubject.asObservable();
    }

    disconnect() {
        this.scenarioSubject.complete();
        this.loadingScenarioSubject.complete();
    }
}
