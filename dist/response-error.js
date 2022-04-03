"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = void 0;
// New error type to handle response errors.
class ResponseError extends Error {
    constructor(response) {
        super("Check error.response for the response from the server.");
        this.name = "ResponseError";
        this.message = "Check error.response for the response from the server.";
        this.response = response;
    }
}
exports.ResponseError = ResponseError;
