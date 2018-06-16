import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'edit.step.tag.html',
  styleUrls: ['./edit.step.tag.scss']
})
export class EditStepTagDialog {

  tags: string[] = [
    'calculator',
    'addDevice',
    'emptyCalculator',
    'message',
    'db',
    'rest',
    'queue',
    'Mongo',
    'json',
    'unbalance'
  ];

  tagCtrl: FormControl;
  filteredTags: Observable<any[]>;
  tagText: string;
  selectedTag: string;

  constructor(private dialogRef: MatDialogRef<EditStepTagDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedTag = data.selectedTag;
    this.tagCtrl = new FormControl();
    this.tagCtrl.setValue(this.selectedTag);
    this.filteredTags = this.tagCtrl.valueChanges
      .pipe(
        startWith(this.selectedTag),
        map(tag => tag ? this.filterTags(tag) : this.tags.slice())
      );
  }

  filterTags(typedVal: string) {
    return this.tags.filter(tag =>
      tag.toLowerCase().indexOf(typedVal.toLowerCase()) === 0);
  }

  done() {
    this.dialogRef.close(this.tagCtrl.value);
  }

  close() {
    this.dialogRef.close(this.selectedTag);
  }

  clearSelection() {
    this.tagCtrl.setValue('');
  }

  clearButtonVisible() {
    return this.tagCtrl.value.length > 0;
  }
}