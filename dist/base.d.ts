/**
 * ResponseError to retun any response errors to the user.
 */
export declare class ResponseError extends Error {
    response: Response;
    constructor(response: Response);
}
/**
 * The base class to build the API client from.
 */
export declare abstract class Base {
    protected baseUrl: string;
    debug: boolean;
    constructor(debug?: boolean);
    /**
     * An internal get request function.
     * @param url The URL for the get request.
     * @param params The parameters to be sent along with the get request.
     */
    protected get<Type>(url: string, params?: {}): Promise<Type>;
    /**
     * This function recrusively scans through an object to detect numeric dates and converts them to Date objects for the end-user to handle.
     * @param obj The response json object to recursively scan through.
     */
    protected recursiveProcessObjectDates(obj: any): void;
}
