import { Base } from "../base";
import { FilterParams } from "../generic.interfaces";
import { Organisation, PaginatedOrganisations } from "./interfaces";
export declare class Organisations extends Base {
    protected processOrganisation(organisation: Organisation): void;
    getOrganisations(params?: FilterParams): Promise<PaginatedOrganisations>;
    getOrganisation(id: string): Promise<Organisation>;
    getProjectOrganisations(id: string): Promise<PaginatedOrganisations>;
    getPersonOrganisations(id: string): Promise<PaginatedOrganisations>;
}
