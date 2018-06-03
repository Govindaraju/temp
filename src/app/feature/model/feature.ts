import { Scenario } from "./scenario";

export interface Feature {
    id : string;
    description : string;
    scenarios : Scenario[];
}