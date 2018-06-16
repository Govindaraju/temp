import { Assert } from "./assert";

export class ReceiveMessage {
    id: string;
    messageDestination: string;
    messageFilter: string;
    asserts: Assert[] = [];
}