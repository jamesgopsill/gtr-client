export interface FilterParams {
    /** Search Terms */
    q?: string;
    /** Specify Page */
    p?: number;
    /** Specify Size of Page */
    s?: number;
    /** Search Fields */
    f?: string;
    /** Sort by */
    sf?: string;
    /** Sort order */
    so?: "A" | "B";
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
