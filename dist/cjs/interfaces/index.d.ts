export * from "./query.interfaces.js";
export * from "./response.interfaces.js";
export type ResponseWithDataAttribute = Response & {
    data?: any;
};
