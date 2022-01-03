import { GtrAssociatedObjects, GtrAssociatedObjectsFiltersType, GtrAssociatedObjectsResponseType, GtrObject, GtrObjectResponseType, GtrObjects, GtrObjectsFiltersType, GtrObjectsResponseType } from ".";
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
     *
     * @param request Getting an object from the GtR API. Use the GetObject interface to identify the object you wish to retrieve. The function will dynamically update with the expected response type from the get call.
     * @param id
     * @returns
     */
    getObject<T extends GtrObject>(request: T, id: string): Promise<GtrObjectResponseType<T>>;
    getObjects<T extends GtrObjects>(request: T, filters?: GtrObjectsFiltersType<T>): Promise<GtrObjectsResponseType<T>>;
    getAssociatedObjects<T extends GtrAssociatedObjects>(request: T, id: string, filters?: GtrAssociatedObjectsFiltersType<T>): Promise<GtrAssociatedObjectsResponseType<T>>;
    /**
     * This function recrusively scans through an object to detect numeric dates and converts them to Date objects for the end-user to handle.
     * @param obj The response json object to recursively scan through.
     */
    protected recursiveProcessObjectDates(obj: any): void;
}
