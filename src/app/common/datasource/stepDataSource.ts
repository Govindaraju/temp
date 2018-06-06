import { DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";

import { Step } from "../../feature/model/step";
import { FeatureserviceService } from "../service/featureservice.service";

export class StepDataSource extends DataSource<Step> {

    private stepSubject = new BehaviorSubject<Step[]>([]);
    private loadingStepSubject = new BehaviorSubject<boolean>(false);
    public loadinStep$ = this.loadingStepSubject.asObservable();

    constructor(private featureService: FeatureserviceService) {
        super();
    }

    loadSteps() {
        console.log('loadSteps called ');
        this.loadingStepSubject.next(true);
        this.featureService.getSteps().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingStepSubject.next(false))
        )
        .subscribe(steps => this.stepSubject.next(steps));
    }

    connect(): Observable<Step[]> {
        console.log('connected');
        return this.stepSubject.asObservable();
    }

    disconnect() {
        this.stepSubject.complete();
        this.loadingStepSubject.complete();
    }
}
