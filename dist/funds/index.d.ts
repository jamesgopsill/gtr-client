import { Fund, FundFilterParams, PaginatedFunds } from "..";
import { Base } from "../base";
export declare class Funds extends Base {
    getFunds(params?: FundFilterParams): Promise<PaginatedFunds>;
    getFund(id: string): Promise<Fund>;
    getProjectFunds(id: string): Promise<PaginatedFunds>;
    getOrganisationFunds(id: string): Promise<PaginatedFunds>;
}
