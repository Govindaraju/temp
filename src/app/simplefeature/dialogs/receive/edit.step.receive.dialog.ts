import { Component, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatTable } from "@angular/material";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EditStepTagDialog } from "../tag/edit.step.tag.dialog";
import { ReceiveMessage } from "../../../feature/model/receive.message";
import { Util } from "../../../common/Util";
import { Assert } from "../../../feature/model/assert";

@Component({
    templateUrl: 'edit.step.receive.html',
    styleUrls: ['./edit.step.receive.scss']
})
export class EditStepReceiveDialog {

    @ViewChild(MatTable) table: MatTable<any>;

    messageDestinationForm: FormGroup;
    assetForm: FormGroup;

    scenarioText: string;
    stepText: string;

    receiveMessage: ReceiveMessage;

    visibleSecton = "destination";
    assertMode = 'add';
    assertCaption = 'Add Assert';

    assertBeingEdited: string;
    operators: string[] = ['Equal to', 'Not equal to', 'Greater than', 'Less than', 'In between', 'Contains'];
    displayedColumns = ['Xpath', 'Condition', 'Value', 'Action'];

    configCleared = false;
    receiveConfigExists = false;

    constructor(private dialogRef: MatDialogRef<EditStepReceiveDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.buildForm();
        this.scenarioText = data.scenarioText;
        this.stepText = data.stepText;

        if (data.receiveMessage !== "undefined") {
            this.receiveMessage = JSON.parse(data.receiveMessage);
            this.messageDestinationForm.get('destination').setValue(this.receiveMessage.messageDestination);
            this.messageDestinationForm.get('filter').setValue(this.receiveMessage.messageFilter);
            this.receiveConfigExists = true;
        } else {
            this.initialiseReceive();
        }
    }

    buildForm(): any {
        this.assetForm = new FormGroup({
            xpath: new FormControl('', {
                validators: [Validators.required]
            }),
            condition: new FormControl('', {
                validators: [Validators.required]
            }),
            expectedValue: new FormControl('', {
                validators: [Validators.required]
            })
        });

        this.messageDestinationForm = new FormGroup({
            destination: new FormControl('', {
                validators: [Validators.required]
            }),
            filter: new FormControl('', {
                validators: [Validators.required]
            }),
        });
    }

    initialiseReceive() {
        if (this.receiveMessage === undefined) {
            this.receiveMessage = new ReceiveMessage();
            this.receiveMessage.id = Util.key();
        }
    }

    done() {
        let result = this.receiveMessage;
        if (this.configCleared) {
            result = undefined;
        }
        this.dialogRef.close(result);
    }

    cancel() {
        this.dialogRef.close("cancel");
    }

    showSection(section) {
        this.assertCaption = 'Add Assert'
        this.assertMode = 'add';
        this.visibleSecton = section;
    }

    isCurrentSection(section) {
        return this.visibleSecton === section;
    }

    saveDestination() {
        this.receiveMessage.messageDestination = this.messageDestinationForm.get('destination').value;
        this.receiveMessage.messageFilter = this.messageDestinationForm.get('filter').value;
        this.visibleSecton = 'addNewAssert';
        this.assertMode = 'add';
    }

    saveAssert() {
        if (this.assertMode === "add") {
            this.createNewAssert();
        } else if (this.assertMode === "update") {
            this.updateAssert();
        } else {
            console.log('action did not match');
        }
    }

    createNewAssert() {
        this.initialiseReceive();
        const assert = new Assert();
        assert.id = Util.key();
        assert.xpath = this.assetForm.get('xpath').value;
        assert.condition = this.assetForm.get('condition').value;
        assert.value = this.assetForm.get('expectedValue').value;
        this.receiveMessage.asserts.push(assert);
    }

    updateAssert() {
        const assert = this.filterAssert(this.assertBeingEdited);
        assert.xpath = this.assetForm.get('xpath').value;
        assert.condition = this.assetForm.get('condition').value;
        assert.value = this.assetForm.get('expectedValue').value;

        this.assertBeingEdited = null;
        this.assertMode = 'add';
        this.visibleSecton = 'viewAsserts';
        this.assertCaption = 'Add Assert'
    }

    deleteAssert(assertId) {
        const index = this.receiveMessage.asserts.indexOf(this.filterAssert(assertId));
        this.receiveMessage.asserts.splice(index, 1);
        this.table.renderRows();
    }

    modifyAssert(assertId) {
        const assert = this.filterAssert(assertId);
        this.assetForm.get('xpath').setValue(assert.xpath);
        this.assetForm.get('condition').setValue(assert.condition);
        this.assetForm.get('expectedValue').setValue(assert.value);

        this.visibleSecton = 'addNewAssert';
        this.assertMode = 'update';
        this.assertCaption = 'Update Assert'
        this.assertBeingEdited = assertId;
    }

    clearReceiveConfig() {
        this.receiveMessage = new ReceiveMessage();
        this.configCleared = true;
        this.messageDestinationForm.get('destination').setValue(null);
        this.messageDestinationForm.get('filter').setValue(null);
        this.assetForm.get('xpath').setValue(null);
        this.assetForm.get('condition').setValue(null);
        this.assetForm.get('expectedValue').setValue(null);


    }

    isVisible() {
        return (this.assertMode === 'add' || this.assertMode === 'update');
    }

    assertIcon() {
        return this.assertMode;
    }

    filterAssert(assertId) {
        return this.receiveMessage.asserts.find(assert => assert.id === assertId);
    }
}