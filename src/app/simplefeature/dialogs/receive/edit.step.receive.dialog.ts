import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormControl } from "@angular/forms";
import { EditStepTagDialog } from "../tag/edit.step.tag.dialog";
import { ReceiveMessage } from "../../../feature/model/receive.message";
import { Util } from "../../../common/Util";
import { Assert } from "../../../feature/model/assert";

@Component({
    templateUrl: 'edit.step.receive.html',
    styleUrls: ['./edit.step.receive.scss']
})
export class EditStepReceiveDialog {
    scenarioText: string;
    stepText: string;

    messageDestination: string;
    messageFilter: string;

    xpath : string;
    condition : string;
    expectedValue : string;

    receiveMessage: ReceiveMessage;
    visibleSecton = "destination";
    operators: string[] = ['Equal to', 'Not equal to', 'Greater than', 'Less than', 'In between'];
    displayedColumns = ['Xpath', 'Condition', 'Value', 'Action'];

    constructor(private dialogRef: MatDialogRef<EditStepTagDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log('data passed ', data);
        this.scenarioText = data.scenarioText;
        this.stepText = data.stepText;
        this.receiveMessage = new ReceiveMessage();
        this.receiveMessage.id = Util.key();
    }

    done() {
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

    showSection(section) {
        this.visibleSecton = section;
    }

    isCurrentSection(section) {
        return this.visibleSecton === section;
    }

    saveDestination() {
        this.receiveMessage.messageDestination = this.messageDestination;
        this.receiveMessage.messageFilter = this.messageFilter;
        this.visibleSecton = 'addNewAssert';
    }

    saveAssert() {
        const assert = new Assert();
        assert.id = Util.key();
        assert.xpath = this.xpath;
        assert.condition = this.condition;
        assert.value = this.expectedValue;
        this.receiveMessage.asserts.push(assert);
        console.log('receiveMessage ', this.receiveMessage);
    }
}