import { Component, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatTable } from "@angular/material";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
    templateUrl: 'edit.scenario.description.html',
    styleUrls: ['./edit.scenario.description.scss']
})
export class EditScenarioDescriptionDialog {

    scenarioText: string;
    scenarioDescripForm: FormGroup;

    constructor(private dialogRef: MatDialogRef<EditScenarioDescriptionDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.scenarioText = data.scenarioText;
        this.buildForm();
    }

    buildForm(): any {
        this.scenarioDescripForm = new FormGroup({
            scenarioDescription: new FormControl('', {
                validators: [Validators.required]
            })
        });
        this.scenarioDescripForm.get('scenarioDescription').setValue(this.scenarioText);
    }

    done() {
        this.dialogRef.close(this.scenarioDescripForm.get('scenarioDescription').value);
    }

    close() {
        this.dialogRef.close(this.scenarioText);
    }

}