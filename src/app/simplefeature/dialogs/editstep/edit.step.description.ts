import { Component, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatTable } from "@angular/material";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
    templateUrl: 'edit.step.description.html',
    styleUrls: ['./edit.step.description.scss']
})
export class EditStepDescriptionDialog {

    stepText: string;
    stepDescriptionForm: FormGroup;

    constructor(private dialogRef: MatDialogRef<EditStepDescriptionDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.stepText = data.stepText;
        this.buildForm();
    }

    buildForm(): any {
        this.stepDescriptionForm = new FormGroup({
            stepDescription: new FormControl('', {
                validators: [Validators.required]
            })
        });
        this.stepDescriptionForm.get('stepDescription').setValue(this.stepText);
    }

    done() {
        this.dialogRef.close(this.stepDescriptionForm.get('stepDescription').value);
    }

    close() {
        this.dialogRef.close(this.stepText);
    }

}