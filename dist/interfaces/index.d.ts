export * from "./query.interfaces";
export * from "./response.interfaces";
export declare type ResponseWithDataAttribute<T> = Response & {
    data?: T;
};
