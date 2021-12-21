import { Base } from "../base";
import { Fund, FundFilterParams, PaginatedFunds } from "./interfaces";
export declare class Funds extends Base {
    getFunds(params?: FundFilterParams): Promise<PaginatedFunds>;
    getFund(id: string): Promise<Fund>;
    getProjectFunds(id: string): Promise<PaginatedFunds>;
    getOrganisationFunds(id: string): Promise<PaginatedFunds>;
}
