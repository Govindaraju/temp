import { DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";

import { FeatureserviceService } from "../service/featureservice.service";
import { Feature } from "../../feature/model/feature";

export class FeatureDataSource extends DataSource<Feature> {

    private featureSubject = new BehaviorSubject<Feature[]>([]);
    private loadingFeatureSubject = new BehaviorSubject<boolean>(false);
    public loadingFeature$ = this.loadingFeatureSubject.asObservable();

    constructor(private featureService: FeatureserviceService) {
        super();
    }

    loadFeatures() {
        console.log('loadScenarios called ');
        this.loadingFeatureSubject.next(true);
        this.featureService.getFeatures().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingFeatureSubject.next(false))
        )
            .subscribe(features => this.featureSubject.next(features));
    }

    connect(): Observable<Feature[]> {
        console.log('loadScenarios connected');
        return this.featureSubject.asObservable();
    }

    disconnect() {
        this.featureSubject.complete();
        this.loadingFeatureSubject.complete();
    }
}
