"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GtrClient = exports.ResponseError = void 0;
const cross_fetch_1 = require("cross-fetch");
__exportStar(require("./generic.interfaces"), exports);
__exportStar(require("./get-associated-objects.interfaces"), exports);
__exportStar(require("./get-object.interfaces"), exports);
__exportStar(require("./get-objects.interfaces"), exports);
/**
 * ResponseError to retun any response errors to the user.
 */
class ResponseError extends Error {
    constructor(response) {
        super("Check error.response for the response from the server.");
        this.name = "ResponseError";
        this.message = "Check error.response for the response from the server.";
        this.response = response;
    }
}
exports.ResponseError = ResponseError;
/**
 * The GtrClient.
 */
class GtrClient {
    constructor(debug = false) {
        this.baseUrl = "https://gtr.ukri.org/gtr/api";
        this.debug = debug;
    }
    /**
     * An internal get request function.
     * @param url The URL for the get request.
     * @param params The parameters to be sent along with the get request.
     */
    async get(url, params = {}) {
        if (Object.keys(params).length !== 0) {
            url += "?" + new URLSearchParams(params).toString();
        }
        if (this.debug)
            console.log(url);
        return (0, cross_fetch_1.fetch)(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/vnd.rcuk.gtr.json-v7",
            },
        }).then(async (r) => {
            if (r.ok) {
                const json = await r.json();
                this.recursiveProcessObjectDates(json);
                return json;
            }
            throw new ResponseError(r);
        });
    }
    /**
     *
     * @param request Getting an object from the GtR API. Use the GetObject interface to identify the object you wish to retrieve. The function will dynamically update with the expected response type from the get call.
     * @param id
     * @returns
     */
    async getObject(request, id) {
        const url = `${this.baseUrl}/${request}/${id}`;
        return this.get(url);
    }
    async getObjects(request, filters) {
        const url = `${this.baseUrl}/${request}`;
        return this.get(url, filters);
    }
    async getAssociatedObjects(request, id, filters) {
        let url = `${this.baseUrl}/${request}`;
        url = url.replace("_", id);
        return this.get(url, filters);
    }
    /**
     * This function recrusively scans through an object to detect numeric dates and converts them to Date objects for the end-user to handle.
     * @param obj The response json object to recursively scan through.
     */
    recursiveProcessObjectDates(obj) {
        Object.keys(obj).forEach((key) => {
            // console.log(key, typeof obj[key], Array.isArray(obj[key]))
            // If the object is a number and it has a length of 13 then consider it as a date
            if (typeof obj[key] == "number") {
                if (obj[key].toString().length == 13) {
                    // console.log("Date Found")
                    obj[key] = new Date(obj[key]);
                }
            }
            // If it is an array then iterate through the objects and perform the recursive process objects
            if (typeof obj[key] == "object" && Array.isArray(obj[key])) {
                for (const el of obj[key]) {
                    // console.log(el)
                    this.recursiveProcessObjectDates(el);
                }
            }
            // if it is an object then process it
            if (typeof obj[key] == "object" && Array.isArray(obj[key]) == false) {
                this.recursiveProcessObjectDates(obj[key]);
            }
        });
    }
}
exports.GtrClient = GtrClient;
