import { GenericFilterParams, PaginatedOrganisations, PaginatedProjects } from "..";
import { Base } from "../base";
export declare class Projects extends Base {
    getProjects(params?: GenericFilterParams): Promise<PaginatedProjects>;
    getProjectOrganisations(id: string): Promise<PaginatedOrganisations>;
}
