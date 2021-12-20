import { Links } from "./generic.interfaces";
/**
 * ResponseError to retun any response errors to the user.
 */
export declare class ResponseError extends Error {
    response: Response;
    constructor(response: Response);
}
/**
 * The base class to build the API client from
 */
export declare abstract class Base {
    protected baseURL: string;
    debug: boolean;
    constructor(debug?: boolean);
    /**
     * An internal get request function
     */
    protected get<Type>(url: string, params?: {}): Promise<Type>;
    protected processLinksDates(links: Links): void;
}
