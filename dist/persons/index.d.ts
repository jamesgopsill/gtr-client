import { GenericFilterParams, PaginatedOrganisations, PaginatedPersons, Person } from "..";
import { Base } from "../base";
export declare class Persons extends Base {
    getPersons(params?: GenericFilterParams): Promise<PaginatedPersons>;
    getPerson(id: string): Promise<Person>;
    getPersonOrganisations(id: string): Promise<PaginatedOrganisations>;
}
