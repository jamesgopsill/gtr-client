"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = exports.ResponseError = void 0;
const cross_fetch_1 = require("cross-fetch");
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
 * The base class to build the API client from
 */
class Base {
    constructor(debug = false) {
        this.baseURL = "https://gtr.ukri.org/gtr/api";
        this.debug = debug;
    }
    /**
     * An internal get request function
     */
    async get(url, params = {}) {
        if (Object.keys(params).length !== 0) {
            url += "?" + (new URLSearchParams(params)).toString();
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
        }).then((r) => {
            if (r.ok) {
                return r.json();
            }
            throw new ResponseError(r);
        });
    }
    processLinksDates(links) {
        for (const l of links.link) {
            l.start = new Date(l.start);
            l.end = new Date(l.end);
        }
    }
}
exports.Base = Base;
