import { DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, of } from "rxjs";
import { Step } from "../feature/model/step";
import { FeatureserviceService } from "./featureservice.service";
import { catchError, finalize } from "rxjs/operators";

export class FeatureDataSource extends DataSource<Step> {

  private stepSubject = new BehaviorSubject<Step[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private featureService: FeatureserviceService) {
    super();
  }

  loadSteps() {
    console.log('loadSteps called ');
    this.loadingSubject.next(true);
    this.featureService.getSteps().pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(steps => this.stepSubject.next(steps));
  }

  connect(): Observable<Step[]> {
    console.log('connected');
    return this.stepSubject.asObservable();
  }

  disconnect() {
    this.stepSubject.complete();
    this.loadingSubject.complete();
  }
}
