import { ReceiveMessage } from "./receive.message";

export class Step {
    id : string;
    prefix: string;
    description: string;
    tag ='';
    receiveMessage : ReceiveMessage;
}