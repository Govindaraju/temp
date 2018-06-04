import { Scenario } from "./scenario";

export class Feature {
    id: string;
    description: string;
    scenarios: Scenario[] = [];
}