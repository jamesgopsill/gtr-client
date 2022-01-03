import { FilterParamsBase, PaginatedOrganisations, PaginatedProjects } from ".";
/**
 * The objects that can be requested. The enum denotes the api endpoint.
 */
export declare enum GtrAssociatedObjects {
    PERSON_ORGANISATIONS = "persons/_/organisations",
    PERSON_PROJECTS = "persons/_/projects",
    PROJECT_ORGANISATIONS = "projects/_/organisations"
}
/**
 * The map of response type against the enum value from GetObjects.
 */
export declare type GtrAssociatedObjectsResponseType<T> = T extends "persons/_/organisations" ? PaginatedOrganisations : T extends "persons/_/projects" ? PaginatedProjects : T extends "projects/_/organisations" ? PaginatedOrganisations : never;
export declare type GtrAssociatedObjectsFiltersType<T> = T extends "persons/_/organisations" ? FilterParamsBase : T extends "persons/_/projects" ? FilterParamsBase : T extends "projects/_/organisations" ? FilterParamsBase : undefined;
