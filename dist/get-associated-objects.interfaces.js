"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GtrAssociatedObjects = void 0;
/**
 * The objects that can be requested. The enum denotes the api endpoint.
 */
var GtrAssociatedObjects;
(function (GtrAssociatedObjects) {
    GtrAssociatedObjects["PERSON_ORGANISATIONS"] = "persons/_/organisations";
    GtrAssociatedObjects["PERSON_PROJECTS"] = "persons/_/projects";
    GtrAssociatedObjects["PROJECT_ORGANISATIONS"] = "projects/_/organisations";
})(GtrAssociatedObjects = exports.GtrAssociatedObjects || (exports.GtrAssociatedObjects = {}));
