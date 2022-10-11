export * from "./query.interfaces.js";
export * from "./response.interfaces.js";
export declare type ResponseWithDataAttribute<T> = Response & {
    data?: T;
};
