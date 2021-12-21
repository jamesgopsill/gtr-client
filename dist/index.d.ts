import { Base } from "./base";
import { Funds } from "./funds";
import { Organisations } from "./organisations";
import { Outcomes } from "./outcomes";
import { Persons } from "./persons";
import { Projects } from "./projects";
/**
 * Inherits from all the other classes featuring the API calls to GtR.
 */
declare class GtrClient extends Base {
}
interface GtrClient extends Funds, Organisations, Outcomes, Persons, Projects {
}
export * from "./funds/interfaces";
export * from "./generic.interfaces";
export * from "./organisations/interfaces";
export * from "./outcomes/interfaces";
export * from "./persons/interfaces";
export * from "./projects/interfaces";
export * from "./generic.interfaces";
export { GtrClient as GtrClient };
