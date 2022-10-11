import { fetch } from "cross-fetch";
import { getObjectMethods, getObjectsMethods } from "./methods.js";
export * from "./interfaces/index.js";
// The GtrClient class to construct the API from
export class GtrClient {
    baseUrl = "https://gtr.ukri.org/gtr/api";
    debug;
    constructor(debug = false) {
        this.debug = debug;
        // Create the get objects methods
        for (const method of getObjectsMethods) {
            //@ts-ignore: Not exactly sure why but it's something about the key value (ts(7053))
            this[method.name] = (params) => {
                return this.getObjects(method.path, params);
            };
        }
        // Add the get object methods
        for (const method of getObjectMethods) {
            //@ts-ignore
            this[method.name] = (id) => {
                return this.getObject(id, method.path);
            };
        }
    }
    async get(url, params = {}) {
        // Perform key conversion
        let requestParams = {};
        const keyConversions = {
            query: "q",
            page: "p",
            pageSize: "s",
            sort: "so",
            searchFields: "f",
            sortFields: "sf",
        };
        for (const [key, value] of Object.entries(keyConversions)) {
            if (params[key]) {
                requestParams[value] = params[key];
            }
        }
        // Add additional search params
        if (Object.keys(params).length !== 0) {
            url += "?" + new URLSearchParams(requestParams).toString();
        }
        if (this.debug)
            console.log(`|- Query: ${url}`);
        const config = {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/vnd.rcuk.gtr.json-v7",
            },
        };
        return fetch(url, config).then(async (r) => {
            if (r.ok) {
                const json = await r.json();
                this.recursiveProcessObjectDates(json);
                r.data = json;
            }
            return r;
        });
    }
    recursiveProcessObjectDates(obj) {
        Object.keys(obj).forEach((key) => {
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
    async getObject(id, path) {
        const url = `${this.baseUrl}/${path}/${id}`;
        return this.get(url);
    }
    async getObjects(path, params = {}) {
        const url = `${this.baseUrl}/${path}`;
        return this.get(url, params);
    }
    async getAssociatedObjects(id, path) {
        let url = `${this.baseUrl}/${path}`;
        url = url.replace(":id", id);
        return this.get(url);
    }
}
