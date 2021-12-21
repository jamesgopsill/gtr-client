export interface FilterParamsBase {
    /** Query term, q=search_term */
    q?: string;
    /** Page of result set, starting at 1, p=1 */
    p?: number;
    /** Size of page between 10 and 100, defaulted to s=20 */
    s?: number;
    /** Sort order A (ascending) or D (descending), so=A */
    so?: "A" | "D";
}
export interface GenericFilterParams extends FilterParamsBase {
    /** Search fields */
    f?: string;
    /** Sort fields */
    sf?: string;
}
export interface Paginated {
    page: number;
    size: number;
    totalPages: number;
    totalSize: number;
}
export interface Link {
    href: string;
    rel: string;
    start: Date;
    end: Date;
    otherAttributes: any;
}
export interface Links {
    link: Link[];
}
