"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetKeyFindingsSortFields = exports.GetKeyFindingsSearchFields = exports.GetOutcomesSortFields = exports.GetFundsSortFields = exports.GetFundsSearchFields = exports.GetOrganisationsSortFields = exports.GetOrganisationsSearchFields = exports.GetProjectsSortFields = exports.GetProjectsSearchFields = exports.GetPeopleSortFields = exports.GetPeopleSearchFields = exports.SortOrder = void 0;
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "A";
    SortOrder["DESCENDING"] = "D";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
// => Enums
var GetPeopleSearchFields;
(function (GetPeopleSearchFields) {
    GetPeopleSearchFields["FIRST_NAME"] = "per.fn";
    GetPeopleSearchFields["FAMILY_NAME"] = "per.sn";
    GetPeopleSearchFields["FIRST_NAME_FAMILY_NAME"] = "per.fnsn";
    GetPeopleSearchFields["ORCID_ID"] = "per.orcidId";
    GetPeopleSearchFields["ORGANISATION_NAME"] = "per.org.n";
    GetPeopleSearchFields["PROJECT_TITLES"] = "per.pro.t";
    GetPeopleSearchFields["PROJECT_ABCSTRACTS"] = "per.pro.abs";
})(GetPeopleSearchFields = exports.GetPeopleSearchFields || (exports.GetPeopleSearchFields = {}));
var GetPeopleSortFields;
(function (GetPeopleSortFields) {
    GetPeopleSortFields["FIRST_NAME"] = "per.fn";
    GetPeopleSortFields["FAMILY_NAME"] = "per.sn";
    GetPeopleSortFields["RELEVANCE"] = "score";
})(GetPeopleSortFields = exports.GetPeopleSortFields || (exports.GetPeopleSortFields = {}));
var GetProjectsSearchFields;
(function (GetProjectsSearchFields) {
    GetProjectsSearchFields["PROJECT_REFERENCE"] = "pro.gr";
    GetProjectsSearchFields["PROJECT_TITLE"] = "pro.t";
    GetProjectsSearchFields["PROJECT_ABSTRACT"] = "pro.a";
    GetProjectsSearchFields["ORCID_ID"] = "pro.orcidId";
    GetProjectsSearchFields["RESEARCH_TOPICS"] = "pro.rt";
    GetProjectsSearchFields["HEALTH_ACTIVITIES"] = "pro.ha";
    GetProjectsSearchFields["RCUK_PROGRAMMES"] = "pro.rcukp";
    GetProjectsSearchFields["LEAD_FUNDER_NAME"] = "pro.lf";
})(GetProjectsSearchFields = exports.GetProjectsSearchFields || (exports.GetProjectsSearchFields = {}));
var GetProjectsSortFields;
(function (GetProjectsSortFields) {
    GetProjectsSortFields["START_DATE"] = "pro.sd";
    GetProjectsSortFields["END_DATE"] = "pro.ed";
    GetProjectsSortFields["FUNDED_VALUE"] = "pro.am";
    GetProjectsSortFields["RELEVANCE"] = "score";
})(GetProjectsSortFields = exports.GetProjectsSortFields || (exports.GetProjectsSortFields = {}));
var GetOrganisationsSearchFields;
(function (GetOrganisationsSearchFields) {
    GetOrganisationsSearchFields["ORGANISATION_NAME"] = "org.n";
    GetOrganisationsSearchFields["PROJECT_TITLES"] = "org.pro.t";
    GetOrganisationsSearchFields["ORCID_ID"] = "org.orcidId";
    GetOrganisationsSearchFields["PROJECT_ABCSTRACTS"] = "org.pro.a";
})(GetOrganisationsSearchFields = exports.GetOrganisationsSearchFields || (exports.GetOrganisationsSearchFields = {}));
var GetOrganisationsSortFields;
(function (GetOrganisationsSortFields) {
    GetOrganisationsSortFields["ORGANISATION_NAME"] = "org.n";
    GetOrganisationsSortFields["RELEVANCE"] = "score";
})(GetOrganisationsSortFields = exports.GetOrganisationsSortFields || (exports.GetOrganisationsSortFields = {}));
var GetFundsSearchFields;
(function (GetFundsSearchFields) {
    GetFundsSearchFields["FUNDED_PROJECT_TITLE"] = "fu.pro.t";
    GetFundsSearchFields["FUND_AMOUNT"] = "fu.am";
    GetFundsSearchFields["FUNDER_ORGANISATION_NAME"] = "fu.org.n";
    GetFundsSearchFields["FUND_TYPE"] = "fu.ty";
})(GetFundsSearchFields = exports.GetFundsSearchFields || (exports.GetFundsSearchFields = {}));
var GetFundsSortFields;
(function (GetFundsSortFields) {
    GetFundsSortFields["FUND_START_DATE"] = "fu.sd";
    GetFundsSortFields["FUND_END_DATE"] = "fu.ed";
    GetFundsSortFields["FUND_AMOUNT"] = "fu.am";
    GetFundsSortFields["FUND_TYPE"] = "fu.ty";
    GetFundsSortFields["RELEVANCE"] = "score";
})(GetFundsSortFields = exports.GetFundsSortFields || (exports.GetFundsSortFields = {}));
var GetOutcomesSortFields;
(function (GetOutcomesSortFields) {
    GetOutcomesSortFields["RELEVANCE"] = "score";
})(GetOutcomesSortFields = exports.GetOutcomesSortFields || (exports.GetOutcomesSortFields = {}));
var GetKeyFindingsSearchFields;
(function (GetKeyFindingsSearchFields) {
    GetKeyFindingsSearchFields["PROJECT_ID"] = "kf.p";
    GetKeyFindingsSearchFields["DESCRIPTION"] = "kf.d";
    GetKeyFindingsSearchFields["SECTOR"] = "kf.s";
    GetKeyFindingsSearchFields["EXPLOITATION_PATHWAYS"] = "kf.ep";
    GetKeyFindingsSearchFields["NON_ACADEMIC_USERS"] = "kf.nau";
    GetKeyFindingsSearchFields["OUTCOME_ID"] = "kf.oid";
    GetKeyFindingsSearchFields["GRANT_REF"] = "kf.gref";
})(GetKeyFindingsSearchFields = exports.GetKeyFindingsSearchFields || (exports.GetKeyFindingsSearchFields = {}));
var GetKeyFindingsSortFields;
(function (GetKeyFindingsSortFields) {
    GetKeyFindingsSortFields["RELEVANCE"] = "score";
})(GetKeyFindingsSortFields = exports.GetKeyFindingsSortFields || (exports.GetKeyFindingsSortFields = {}));
