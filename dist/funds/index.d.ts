import { Base } from "../base";
import { FilterParams } from "../generic.interfaces";
import { Fund, PaginatedFunds } from "./interfaces";
export declare class Funds extends Base {
    getFunds(params?: FilterParams): Promise<PaginatedFunds>;
    getFund(id: string): Promise<Fund>;
    getProjectFunds(id: string): Promise<PaginatedFunds>;
    getOrganisationFunds(id: string): Promise<PaginatedFunds>;
}
