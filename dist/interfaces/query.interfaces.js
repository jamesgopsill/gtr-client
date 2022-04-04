"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCollaborationsSortFields = exports.GetCollaborationsSearchFields = exports.GetPublicationsSortFields = exports.GetPublicationsSearchFields = exports.GetImpactSummariesSortFields = exports.GetImpactSummariesSearchFields = exports.GetKeyFindingsSortFields = exports.GetKeyFindingsSearchFields = exports.GetOutcomesSortFields = exports.GetFundsSortFields = exports.GetFundsSearchFields = exports.GetOrganisationsSortFields = exports.GetOrganisationsSearchFields = exports.GetProjectsSortFields = exports.GetProjectsSearchFields = exports.GetPeopleSortFields = exports.GetPeopleSearchFields = exports.GetIntellectualPropertiesSortFields = exports.GetIntellectualPropertiesSearchFields = exports.GetPolicyInfluencesSortFields = exports.GetPolicyInfluencesSearchFields = exports.GetProductsSortFields = exports.GetProductsSearchFields = exports.GetResearchMaterialsSortFields = exports.GetResearchMaterialsSearchFields = exports.GetSpinoutsSortFields = exports.GetSpinoutsSearchFields = exports.GetFurtherFundingsSortFields = exports.GetFurtherFundingsSearchFields = exports.GetDisseminationsSortFields = exports.GetDisseminationsSearchFields = exports.SortOrder = void 0;
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "A";
    SortOrder["DESCENDING"] = "D";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
// => Enums
var GetDisseminationsSearchFields;
(function (GetDisseminationsSearchFields) {
    GetDisseminationsSearchFields["PROJECT_ID"] = "dis.p";
    GetDisseminationsSearchFields["TITLE"] = "dis.t";
    GetDisseminationsSearchFields["DESCRIPTION"] = "dis.d";
    GetDisseminationsSearchFields["IMPACT"] = "dis.i";
    GetDisseminationsSearchFields["PRESENTATION_TYPE"] = "dis.pt";
    GetDisseminationsSearchFields["OUTCOME_ID"] = "dis.oid";
    GetDisseminationsSearchFields["GRANT_REF"] = "dis.gref";
})(GetDisseminationsSearchFields = exports.GetDisseminationsSearchFields || (exports.GetDisseminationsSearchFields = {}));
var GetDisseminationsSortFields;
(function (GetDisseminationsSortFields) {
    GetDisseminationsSortFields["RELEVANCE"] = "score";
})(GetDisseminationsSortFields = exports.GetDisseminationsSortFields || (exports.GetDisseminationsSortFields = {}));
var GetFurtherFundingsSearchFields;
(function (GetFurtherFundingsSearchFields) {
    GetFurtherFundingsSearchFields["PROJECT_TITLE"] = "ff.p";
    GetFurtherFundingsSearchFields["TITLE"] = "ff.t";
    GetFurtherFundingsSearchFields["DESCRIPTION"] = "ff.d";
    GetFurtherFundingsSearchFields["SECTOR"] = "ff.s";
    GetFurtherFundingsSearchFields["FUNDING_ORGANISATION"] = "ff.org";
    GetFurtherFundingsSearchFields["FUNDING_ORGANISATION_DEPARTMENT"] = "ff.dept";
    GetFurtherFundingsSearchFields["FUNDING_ID"] = "ff.id";
    GetFurtherFundingsSearchFields["OUTCOME_ID"] = "ff.oid";
    GetFurtherFundingsSearchFields["GRANT_REF"] = "FF.gref";
})(GetFurtherFundingsSearchFields = exports.GetFurtherFundingsSearchFields || (exports.GetFurtherFundingsSearchFields = {}));
var GetFurtherFundingsSortFields;
(function (GetFurtherFundingsSortFields) {
    GetFurtherFundingsSortFields["RELEVANCE"] = "score";
})(GetFurtherFundingsSortFields = exports.GetFurtherFundingsSortFields || (exports.GetFurtherFundingsSortFields = {}));
var GetSpinoutsSearchFields;
(function (GetSpinoutsSearchFields) {
    GetSpinoutsSearchFields["PROJECT_ID"] = "so.p";
    GetSpinoutsSearchFields["TITLE"] = "so.t";
    GetSpinoutsSearchFields["DESCRIPTION"] = "so.d";
    GetSpinoutsSearchFields["COMPANY_NAME"] = "so.cn";
    GetSpinoutsSearchFields["COMPANY_DESCRIPTION"] = "sn.cd";
    GetSpinoutsSearchFields["REGISTRATION_NUMBER"] = "so.reg";
    GetSpinoutsSearchFields["OUTCOME_ID"] = "so.oid";
    GetSpinoutsSearchFields["GRANT_REF"] = "so.gref";
})(GetSpinoutsSearchFields = exports.GetSpinoutsSearchFields || (exports.GetSpinoutsSearchFields = {}));
var GetSpinoutsSortFields;
(function (GetSpinoutsSortFields) {
    GetSpinoutsSortFields["RELEVANCE"] = "score";
})(GetSpinoutsSortFields = exports.GetSpinoutsSortFields || (exports.GetSpinoutsSortFields = {}));
var GetResearchMaterialsSearchFields;
(function (GetResearchMaterialsSearchFields) {
    GetResearchMaterialsSearchFields["PROJECT_ID"] = "rtp.p";
    GetResearchMaterialsSearchFields["TITLE"] = "rtp.t";
    GetResearchMaterialsSearchFields["DESCRIPTION"] = "rtp.d";
    GetResearchMaterialsSearchFields["IMPACT"] = "rtp.i";
    GetResearchMaterialsSearchFields["OUTCOME_ID"] = "rtp.oid";
    GetResearchMaterialsSearchFields["GRANT_REF"] = "rtp.gref";
})(GetResearchMaterialsSearchFields = exports.GetResearchMaterialsSearchFields || (exports.GetResearchMaterialsSearchFields = {}));
var GetResearchMaterialsSortFields;
(function (GetResearchMaterialsSortFields) {
    GetResearchMaterialsSortFields["RELEVANCE"] = "score";
})(GetResearchMaterialsSortFields = exports.GetResearchMaterialsSortFields || (exports.GetResearchMaterialsSortFields = {}));
var GetProductsSearchFields;
(function (GetProductsSearchFields) {
    GetProductsSearchFields["PROJECT_ID"] = "prod.p";
    GetProductsSearchFields["IMPACT"] = "prod.i";
    GetProductsSearchFields["UKCRN_ISCTN_ID"] = "prod.uiid";
    GetProductsSearchFields["OUTCOME_ID"] = "prod.oid";
    GetProductsSearchFields["GRANT_REF"] = "prod.gref";
})(GetProductsSearchFields = exports.GetProductsSearchFields || (exports.GetProductsSearchFields = {}));
var GetProductsSortFields;
(function (GetProductsSortFields) {
    GetProductsSortFields["RELEVANCE"] = "score";
})(GetProductsSortFields = exports.GetProductsSortFields || (exports.GetProductsSortFields = {}));
var GetPolicyInfluencesSearchFields;
(function (GetPolicyInfluencesSearchFields) {
    GetPolicyInfluencesSearchFields["PROJECT_ID"] = "pol.p";
    GetPolicyInfluencesSearchFields["IMPACT"] = "pol.i";
    GetPolicyInfluencesSearchFields["GUIDELINE_TITLE"] = "pol.gt";
    GetPolicyInfluencesSearchFields["DESCRIPTION"] = "pol.in";
    GetPolicyInfluencesSearchFields["METHODS"] = "pol.meth";
    GetPolicyInfluencesSearchFields["AREAS"] = "pol.area";
    GetPolicyInfluencesSearchFields["OUTCOME_ID"] = "pol.oid";
    GetPolicyInfluencesSearchFields["GRANT_REF"] = "pol.gref";
})(GetPolicyInfluencesSearchFields = exports.GetPolicyInfluencesSearchFields || (exports.GetPolicyInfluencesSearchFields = {}));
var GetPolicyInfluencesSortFields;
(function (GetPolicyInfluencesSortFields) {
    GetPolicyInfluencesSortFields["RELEVANCE"] = "score";
})(GetPolicyInfluencesSortFields = exports.GetPolicyInfluencesSortFields || (exports.GetPolicyInfluencesSortFields = {}));
var GetIntellectualPropertiesSearchFields;
(function (GetIntellectualPropertiesSearchFields) {
    GetIntellectualPropertiesSearchFields["PROJECT_ID"] = "ip.p";
    GetIntellectualPropertiesSearchFields["TITLE"] = "ip.t";
    GetIntellectualPropertiesSearchFields["DESCRIPTION"] = "ip.d";
    GetIntellectualPropertiesSearchFields["IMPACT"] = "ip.i";
    GetIntellectualPropertiesSearchFields["PROTECTION"] = "ip.pro";
    GetIntellectualPropertiesSearchFields["PATENT_ID"] = "ip.pat";
    GetIntellectualPropertiesSearchFields["OUTCOME_ID"] = "ip.oid";
    GetIntellectualPropertiesSearchFields["GRANT_REF"] = "ip.gref";
})(GetIntellectualPropertiesSearchFields = exports.GetIntellectualPropertiesSearchFields || (exports.GetIntellectualPropertiesSearchFields = {}));
var GetIntellectualPropertiesSortFields;
(function (GetIntellectualPropertiesSortFields) {
    GetIntellectualPropertiesSortFields["RELEVANCE"] = "score";
})(GetIntellectualPropertiesSortFields = exports.GetIntellectualPropertiesSortFields || (exports.GetIntellectualPropertiesSortFields = {}));
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
var GetImpactSummariesSearchFields;
(function (GetImpactSummariesSearchFields) {
    GetImpactSummariesSearchFields["PROJECT_ID"] = "is.p";
    GetImpactSummariesSearchFields["TITLE"] = "is.t";
    GetImpactSummariesSearchFields["DESCRIPTION"] = "is.d";
    GetImpactSummariesSearchFields["SECTOR"] = "is.s";
    GetImpactSummariesSearchFields["BENEFICIARIES"] = "is.ben";
    GetImpactSummariesSearchFields["CONTRIBUTION_METHOD"] = "is.cm";
    GetImpactSummariesSearchFields["IMPACT_TYPES"] = "is.it";
    GetImpactSummariesSearchFields["SUMMARY"] = "is.sum";
    GetImpactSummariesSearchFields["OUTCOME_ID"] = "is.oid";
    GetImpactSummariesSearchFields["GRANT_REF"] = "is.gref";
})(GetImpactSummariesSearchFields = exports.GetImpactSummariesSearchFields || (exports.GetImpactSummariesSearchFields = {}));
var GetImpactSummariesSortFields;
(function (GetImpactSummariesSortFields) {
    GetImpactSummariesSortFields["RELEVANCE"] = "score";
})(GetImpactSummariesSortFields = exports.GetImpactSummariesSortFields || (exports.GetImpactSummariesSortFields = {}));
var GetPublicationsSearchFields;
(function (GetPublicationsSearchFields) {
    GetPublicationsSearchFields["PROJECT_ID"] = "pub.p";
    GetPublicationsSearchFields["TITLE"] = "pub.t";
    GetPublicationsSearchFields["ABSTRACT"] = "pub.a";
    GetPublicationsSearchFields["PROJECT_TITLE"] = "pub.pr.t";
    GetPublicationsSearchFields["ISBN"] = "pub.isbn";
    GetPublicationsSearchFields["ISSN"] = "pub.issn";
    GetPublicationsSearchFields["PARENT_PUBLICATION"] = "pub.jt";
    GetPublicationsSearchFields["PUBMED_ID"] = "pub.pmid";
    GetPublicationsSearchFields["DOI"] = "pub.doi";
    GetPublicationsSearchFields["OUTCOME_ID"] = "pub.oid";
    GetPublicationsSearchFields["GRANT_REF"] = "pub.gref";
})(GetPublicationsSearchFields = exports.GetPublicationsSearchFields || (exports.GetPublicationsSearchFields = {}));
var GetPublicationsSortFields;
(function (GetPublicationsSortFields) {
    GetPublicationsSortFields["DATE"] = "pub.date";
    GetPublicationsSortFields["RELEVANCE"] = "score";
})(GetPublicationsSortFields = exports.GetPublicationsSortFields || (exports.GetPublicationsSortFields = {}));
var GetCollaborationsSearchFields;
(function (GetCollaborationsSearchFields) {
    GetCollaborationsSearchFields["PROJECT_ID"] = "col.p";
    GetCollaborationsSearchFields["IMPACT"] = "col.i";
    GetCollaborationsSearchFields["DESCRIPTION"] = "col.d";
    GetCollaborationsSearchFields["SECTOR"] = "col.s";
    GetCollaborationsSearchFields["DEPARTMENT"] = "col.dept";
    GetCollaborationsSearchFields["ORGANISATION"] = "col.org";
    GetCollaborationsSearchFields["PARTNER_CONTRIBUTION"] = "col.pc";
    GetCollaborationsSearchFields["PRINCIPAL_INVESTIGATOR_CONTRIBUTION"] = "col.pic";
    GetCollaborationsSearchFields["OUTCOME_ID"] = "col.oid";
    GetCollaborationsSearchFields["GRANT_REF"] = "col.gref";
})(GetCollaborationsSearchFields = exports.GetCollaborationsSearchFields || (exports.GetCollaborationsSearchFields = {}));
var GetCollaborationsSortFields;
(function (GetCollaborationsSortFields) {
    GetCollaborationsSortFields["START_DATE"] = "col.std";
    GetCollaborationsSortFields["RELEVANCE"] = "score";
})(GetCollaborationsSortFields = exports.GetCollaborationsSortFields || (exports.GetCollaborationsSortFields = {}));
