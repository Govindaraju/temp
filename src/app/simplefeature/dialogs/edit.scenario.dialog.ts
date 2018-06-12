import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
    // selector: 'dialog-overview-example-dialog',
    templateUrl: 'edit.scenario.html',
  })
  export class EditScenarioDialog {
  
    constructor(public dialogRef: MatDialogRef<EditScenarioDialog>) { }
  
    closeDialog() {
      this.dialogRef.close('Square root');
    }
  
  }