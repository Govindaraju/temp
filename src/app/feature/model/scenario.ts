import { Step } from "./step";

export class Scenario {
    id: string;
    description: string;
    steps: Step[] = [];
}