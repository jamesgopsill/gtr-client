"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaborationsSortFields = exports.CollaborationsSearchFields = exports.PublicationsSortFields = exports.PublicationsSearchFields = exports.ImpactSummariesSortFields = exports.ImpactSummariesSearchFields = exports.KeyFindingsSortFields = exports.KeyFindingsSearchFields = exports.OutcomesSortFields = exports.FundsSortFields = exports.FundsSearchFields = exports.OrganisationsSortFields = exports.OrganisationsSearchFields = exports.ProjectsSortFields = exports.ProjectsSearchFields = exports.PeopleSortFields = exports.PeopleSearchFields = exports.IntellectualPropertiesSortFields = exports.IntellectualPropertiesSearchFields = exports.PolicyInfluencesSortFields = exports.PolicyInfluencesSearchFields = exports.ProductsSortFields = exports.ProductsSearchFields = exports.ResearchMaterialsSortFields = exports.ResearchMaterialsSearchFields = exports.SpinoutsSortFields = exports.SpinoutsSearchFields = exports.FurtherFundingsSortFields = exports.FurtherFundingsSearchFields = exports.DisseminationsSortFields = exports.DisseminationsSearchFields = exports.SortOrder = void 0;
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "A";
    SortOrder["DESCENDING"] = "D";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
// => Enums
var DisseminationsSearchFields;
(function (DisseminationsSearchFields) {
    DisseminationsSearchFields["PROJECT_ID"] = "dis.p";
    DisseminationsSearchFields["TITLE"] = "dis.t";
    DisseminationsSearchFields["DESCRIPTION"] = "dis.d";
    DisseminationsSearchFields["IMPACT"] = "dis.i";
    DisseminationsSearchFields["PRESENTATION_TYPE"] = "dis.pt";
    DisseminationsSearchFields["OUTCOME_ID"] = "dis.oid";
    DisseminationsSearchFields["GRANT_REF"] = "dis.gref";
})(DisseminationsSearchFields = exports.DisseminationsSearchFields || (exports.DisseminationsSearchFields = {}));
var DisseminationsSortFields;
(function (DisseminationsSortFields) {
    DisseminationsSortFields["RELEVANCE"] = "score";
})(DisseminationsSortFields = exports.DisseminationsSortFields || (exports.DisseminationsSortFields = {}));
var FurtherFundingsSearchFields;
(function (FurtherFundingsSearchFields) {
    FurtherFundingsSearchFields["PROJECT_TITLE"] = "ff.p";
    FurtherFundingsSearchFields["TITLE"] = "ff.t";
    FurtherFundingsSearchFields["DESCRIPTION"] = "ff.d";
    FurtherFundingsSearchFields["SECTOR"] = "ff.s";
    FurtherFundingsSearchFields["FUNDING_ORGANISATION"] = "ff.org";
    FurtherFundingsSearchFields["FUNDING_ORGANISATION_DEPARTMENT"] = "ff.dept";
    FurtherFundingsSearchFields["FUNDING_ID"] = "ff.id";
    FurtherFundingsSearchFields["OUTCOME_ID"] = "ff.oid";
    FurtherFundingsSearchFields["GRANT_REF"] = "FF.gref";
})(FurtherFundingsSearchFields = exports.FurtherFundingsSearchFields || (exports.FurtherFundingsSearchFields = {}));
var FurtherFundingsSortFields;
(function (FurtherFundingsSortFields) {
    FurtherFundingsSortFields["RELEVANCE"] = "score";
})(FurtherFundingsSortFields = exports.FurtherFundingsSortFields || (exports.FurtherFundingsSortFields = {}));
var SpinoutsSearchFields;
(function (SpinoutsSearchFields) {
    SpinoutsSearchFields["PROJECT_ID"] = "so.p";
    SpinoutsSearchFields["TITLE"] = "so.t";
    SpinoutsSearchFields["DESCRIPTION"] = "so.d";
    SpinoutsSearchFields["COMPANY_NAME"] = "so.cn";
    SpinoutsSearchFields["COMPANY_DESCRIPTION"] = "sn.cd";
    SpinoutsSearchFields["REGISTRATION_NUMBER"] = "so.reg";
    SpinoutsSearchFields["OUTCOME_ID"] = "so.oid";
    SpinoutsSearchFields["GRANT_REF"] = "so.gref";
})(SpinoutsSearchFields = exports.SpinoutsSearchFields || (exports.SpinoutsSearchFields = {}));
var SpinoutsSortFields;
(function (SpinoutsSortFields) {
    SpinoutsSortFields["RELEVANCE"] = "score";
})(SpinoutsSortFields = exports.SpinoutsSortFields || (exports.SpinoutsSortFields = {}));
var ResearchMaterialsSearchFields;
(function (ResearchMaterialsSearchFields) {
    ResearchMaterialsSearchFields["PROJECT_ID"] = "rtp.p";
    ResearchMaterialsSearchFields["TITLE"] = "rtp.t";
    ResearchMaterialsSearchFields["DESCRIPTION"] = "rtp.d";
    ResearchMaterialsSearchFields["IMPACT"] = "rtp.i";
    ResearchMaterialsSearchFields["OUTCOME_ID"] = "rtp.oid";
    ResearchMaterialsSearchFields["GRANT_REF"] = "rtp.gref";
})(ResearchMaterialsSearchFields = exports.ResearchMaterialsSearchFields || (exports.ResearchMaterialsSearchFields = {}));
var ResearchMaterialsSortFields;
(function (ResearchMaterialsSortFields) {
    ResearchMaterialsSortFields["RELEVANCE"] = "score";
})(ResearchMaterialsSortFields = exports.ResearchMaterialsSortFields || (exports.ResearchMaterialsSortFields = {}));
var ProductsSearchFields;
(function (ProductsSearchFields) {
    ProductsSearchFields["PROJECT_ID"] = "prod.p";
    ProductsSearchFields["IMPACT"] = "prod.i";
    ProductsSearchFields["UKCRN_ISCTN_ID"] = "prod.uiid";
    ProductsSearchFields["OUTCOME_ID"] = "prod.oid";
    ProductsSearchFields["GRANT_REF"] = "prod.gref";
})(ProductsSearchFields = exports.ProductsSearchFields || (exports.ProductsSearchFields = {}));
var ProductsSortFields;
(function (ProductsSortFields) {
    ProductsSortFields["RELEVANCE"] = "score";
})(ProductsSortFields = exports.ProductsSortFields || (exports.ProductsSortFields = {}));
var PolicyInfluencesSearchFields;
(function (PolicyInfluencesSearchFields) {
    PolicyInfluencesSearchFields["PROJECT_ID"] = "pol.p";
    PolicyInfluencesSearchFields["IMPACT"] = "pol.i";
    PolicyInfluencesSearchFields["GUIDELINE_TITLE"] = "pol.gt";
    PolicyInfluencesSearchFields["DESCRIPTION"] = "pol.in";
    PolicyInfluencesSearchFields["METHODS"] = "pol.meth";
    PolicyInfluencesSearchFields["AREAS"] = "pol.area";
    PolicyInfluencesSearchFields["OUTCOME_ID"] = "pol.oid";
    PolicyInfluencesSearchFields["GRANT_REF"] = "pol.gref";
})(PolicyInfluencesSearchFields = exports.PolicyInfluencesSearchFields || (exports.PolicyInfluencesSearchFields = {}));
var PolicyInfluencesSortFields;
(function (PolicyInfluencesSortFields) {
    PolicyInfluencesSortFields["RELEVANCE"] = "score";
})(PolicyInfluencesSortFields = exports.PolicyInfluencesSortFields || (exports.PolicyInfluencesSortFields = {}));
var IntellectualPropertiesSearchFields;
(function (IntellectualPropertiesSearchFields) {
    IntellectualPropertiesSearchFields["PROJECT_ID"] = "ip.p";
    IntellectualPropertiesSearchFields["TITLE"] = "ip.t";
    IntellectualPropertiesSearchFields["DESCRIPTION"] = "ip.d";
    IntellectualPropertiesSearchFields["IMPACT"] = "ip.i";
    IntellectualPropertiesSearchFields["PROTECTION"] = "ip.pro";
    IntellectualPropertiesSearchFields["PATENT_ID"] = "ip.pat";
    IntellectualPropertiesSearchFields["OUTCOME_ID"] = "ip.oid";
    IntellectualPropertiesSearchFields["GRANT_REF"] = "ip.gref";
})(IntellectualPropertiesSearchFields = exports.IntellectualPropertiesSearchFields || (exports.IntellectualPropertiesSearchFields = {}));
var IntellectualPropertiesSortFields;
(function (IntellectualPropertiesSortFields) {
    IntellectualPropertiesSortFields["RELEVANCE"] = "score";
})(IntellectualPropertiesSortFields = exports.IntellectualPropertiesSortFields || (exports.IntellectualPropertiesSortFields = {}));
var PeopleSearchFields;
(function (PeopleSearchFields) {
    PeopleSearchFields["FIRST_NAME"] = "per.fn";
    PeopleSearchFields["FAMILY_NAME"] = "per.sn";
    PeopleSearchFields["FIRST_NAME_FAMILY_NAME"] = "per.fnsn";
    PeopleSearchFields["ORCID_ID"] = "per.orcidId";
    PeopleSearchFields["ORGANISATION_NAME"] = "per.org.n";
    PeopleSearchFields["PROJECT_TITLES"] = "per.pro.t";
    PeopleSearchFields["PROJECT_ABCSTRACTS"] = "per.pro.abs";
})(PeopleSearchFields = exports.PeopleSearchFields || (exports.PeopleSearchFields = {}));
var PeopleSortFields;
(function (PeopleSortFields) {
    PeopleSortFields["FIRST_NAME"] = "per.fn";
    PeopleSortFields["FAMILY_NAME"] = "per.sn";
    PeopleSortFields["RELEVANCE"] = "score";
})(PeopleSortFields = exports.PeopleSortFields || (exports.PeopleSortFields = {}));
var ProjectsSearchFields;
(function (ProjectsSearchFields) {
    ProjectsSearchFields["PROJECT_REFERENCE"] = "pro.gr";
    ProjectsSearchFields["PROJECT_TITLE"] = "pro.t";
    ProjectsSearchFields["PROJECT_ABSTRACT"] = "pro.a";
    ProjectsSearchFields["ORCID_ID"] = "pro.orcidId";
    ProjectsSearchFields["RESEARCH_TOPICS"] = "pro.rt";
    ProjectsSearchFields["HEALTH_ACTIVITIES"] = "pro.ha";
    ProjectsSearchFields["RCUK_PROGRAMMES"] = "pro.rcukp";
    ProjectsSearchFields["LEAD_FUNDER_NAME"] = "pro.lf";
})(ProjectsSearchFields = exports.ProjectsSearchFields || (exports.ProjectsSearchFields = {}));
var ProjectsSortFields;
(function (ProjectsSortFields) {
    ProjectsSortFields["START_DATE"] = "pro.sd";
    ProjectsSortFields["END_DATE"] = "pro.ed";
    ProjectsSortFields["FUNDED_VALUE"] = "pro.am";
    ProjectsSortFields["RELEVANCE"] = "score";
})(ProjectsSortFields = exports.ProjectsSortFields || (exports.ProjectsSortFields = {}));
var OrganisationsSearchFields;
(function (OrganisationsSearchFields) {
    OrganisationsSearchFields["ORGANISATION_NAME"] = "org.n";
    OrganisationsSearchFields["PROJECT_TITLES"] = "org.pro.t";
    OrganisationsSearchFields["ORCID_ID"] = "org.orcidId";
    OrganisationsSearchFields["PROJECT_ABCSTRACTS"] = "org.pro.a";
})(OrganisationsSearchFields = exports.OrganisationsSearchFields || (exports.OrganisationsSearchFields = {}));
var OrganisationsSortFields;
(function (OrganisationsSortFields) {
    OrganisationsSortFields["ORGANISATION_NAME"] = "org.n";
    OrganisationsSortFields["RELEVANCE"] = "score";
})(OrganisationsSortFields = exports.OrganisationsSortFields || (exports.OrganisationsSortFields = {}));
var FundsSearchFields;
(function (FundsSearchFields) {
    FundsSearchFields["FUNDED_PROJECT_TITLE"] = "fu.pro.t";
    FundsSearchFields["FUND_AMOUNT"] = "fu.am";
    FundsSearchFields["FUNDER_ORGANISATION_NAME"] = "fu.org.n";
    FundsSearchFields["FUND_TYPE"] = "fu.ty";
})(FundsSearchFields = exports.FundsSearchFields || (exports.FundsSearchFields = {}));
var FundsSortFields;
(function (FundsSortFields) {
    FundsSortFields["FUND_START_DATE"] = "fu.sd";
    FundsSortFields["FUND_END_DATE"] = "fu.ed";
    FundsSortFields["FUND_AMOUNT"] = "fu.am";
    FundsSortFields["FUND_TYPE"] = "fu.ty";
    FundsSortFields["RELEVANCE"] = "score";
})(FundsSortFields = exports.FundsSortFields || (exports.FundsSortFields = {}));
var OutcomesSortFields;
(function (OutcomesSortFields) {
    OutcomesSortFields["RELEVANCE"] = "score";
})(OutcomesSortFields = exports.OutcomesSortFields || (exports.OutcomesSortFields = {}));
var KeyFindingsSearchFields;
(function (KeyFindingsSearchFields) {
    KeyFindingsSearchFields["PROJECT_ID"] = "kf.p";
    KeyFindingsSearchFields["DESCRIPTION"] = "kf.d";
    KeyFindingsSearchFields["SECTOR"] = "kf.s";
    KeyFindingsSearchFields["EXPLOITATION_PATHWAYS"] = "kf.ep";
    KeyFindingsSearchFields["NON_ACADEMIC_USERS"] = "kf.nau";
    KeyFindingsSearchFields["OUTCOME_ID"] = "kf.oid";
    KeyFindingsSearchFields["GRANT_REF"] = "kf.gref";
})(KeyFindingsSearchFields = exports.KeyFindingsSearchFields || (exports.KeyFindingsSearchFields = {}));
var KeyFindingsSortFields;
(function (KeyFindingsSortFields) {
    KeyFindingsSortFields["RELEVANCE"] = "score";
})(KeyFindingsSortFields = exports.KeyFindingsSortFields || (exports.KeyFindingsSortFields = {}));
var ImpactSummariesSearchFields;
(function (ImpactSummariesSearchFields) {
    ImpactSummariesSearchFields["PROJECT_ID"] = "is.p";
    ImpactSummariesSearchFields["TITLE"] = "is.t";
    ImpactSummariesSearchFields["DESCRIPTION"] = "is.d";
    ImpactSummariesSearchFields["SECTOR"] = "is.s";
    ImpactSummariesSearchFields["BENEFICIARIES"] = "is.ben";
    ImpactSummariesSearchFields["CONTRIBUTION_METHOD"] = "is.cm";
    ImpactSummariesSearchFields["IMPACT_TYPES"] = "is.it";
    ImpactSummariesSearchFields["SUMMARY"] = "is.sum";
    ImpactSummariesSearchFields["OUTCOME_ID"] = "is.oid";
    ImpactSummariesSearchFields["GRANT_REF"] = "is.gref";
})(ImpactSummariesSearchFields = exports.ImpactSummariesSearchFields || (exports.ImpactSummariesSearchFields = {}));
var ImpactSummariesSortFields;
(function (ImpactSummariesSortFields) {
    ImpactSummariesSortFields["RELEVANCE"] = "score";
})(ImpactSummariesSortFields = exports.ImpactSummariesSortFields || (exports.ImpactSummariesSortFields = {}));
var PublicationsSearchFields;
(function (PublicationsSearchFields) {
    PublicationsSearchFields["PROJECT_ID"] = "pub.p";
    PublicationsSearchFields["TITLE"] = "pub.t";
    PublicationsSearchFields["ABSTRACT"] = "pub.a";
    PublicationsSearchFields["PROJECT_TITLE"] = "pub.pr.t";
    PublicationsSearchFields["ISBN"] = "pub.isbn";
    PublicationsSearchFields["ISSN"] = "pub.issn";
    PublicationsSearchFields["PARENT_PUBLICATION"] = "pub.jt";
    PublicationsSearchFields["PUBMED_ID"] = "pub.pmid";
    PublicationsSearchFields["DOI"] = "pub.doi";
    PublicationsSearchFields["OUTCOME_ID"] = "pub.oid";
    PublicationsSearchFields["GRANT_REF"] = "pub.gref";
})(PublicationsSearchFields = exports.PublicationsSearchFields || (exports.PublicationsSearchFields = {}));
var PublicationsSortFields;
(function (PublicationsSortFields) {
    PublicationsSortFields["DATE"] = "pub.date";
    PublicationsSortFields["RELEVANCE"] = "score";
})(PublicationsSortFields = exports.PublicationsSortFields || (exports.PublicationsSortFields = {}));
var CollaborationsSearchFields;
(function (CollaborationsSearchFields) {
    CollaborationsSearchFields["PROJECT_ID"] = "col.p";
    CollaborationsSearchFields["IMPACT"] = "col.i";
    CollaborationsSearchFields["DESCRIPTION"] = "col.d";
    CollaborationsSearchFields["SECTOR"] = "col.s";
    CollaborationsSearchFields["DEPARTMENT"] = "col.dept";
    CollaborationsSearchFields["ORGANISATION"] = "col.org";
    CollaborationsSearchFields["PARTNER_CONTRIBUTION"] = "col.pc";
    CollaborationsSearchFields["PRINCIPAL_INVESTIGATOR_CONTRIBUTION"] = "col.pic";
    CollaborationsSearchFields["OUTCOME_ID"] = "col.oid";
    CollaborationsSearchFields["GRANT_REF"] = "col.gref";
})(CollaborationsSearchFields = exports.CollaborationsSearchFields || (exports.CollaborationsSearchFields = {}));
var CollaborationsSortFields;
(function (CollaborationsSortFields) {
    CollaborationsSortFields["START_DATE"] = "col.std";
    CollaborationsSortFields["RELEVANCE"] = "score";
})(CollaborationsSortFields = exports.CollaborationsSortFields || (exports.CollaborationsSortFields = {}));
