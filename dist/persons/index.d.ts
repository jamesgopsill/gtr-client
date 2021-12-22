import { GenericFilterParams, PaginatedOrganisations, PaginatedPersons, PaginatedProjects, Person } from "..";
import { Base } from "../base";
export declare class Persons extends Base {
    getPersons(params?: GenericFilterParams): Promise<PaginatedPersons>;
    getPerson(id: string): Promise<Person>;
    getPersonOrganisations(id: string): Promise<PaginatedOrganisations>;
    getPersonProjects(id: string): Promise<PaginatedProjects>;
}
