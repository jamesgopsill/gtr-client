import { GenericFilterParams, Organisation, PaginatedOrganisations, PaginatedPersons, PaginatedProjects } from "..";
import { Base } from "../base";
export declare class Organisations extends Base {
    getOrganisations(params?: GenericFilterParams): Promise<PaginatedOrganisations>;
    getOrganisation(id: string): Promise<Organisation>;
    getOrganisationsProjects(id: string): Promise<PaginatedProjects>;
    getOrganisationsPersons(id: string): Promise<PaginatedPersons>;
}
