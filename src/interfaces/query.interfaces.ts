export interface GenericQuery {
	/** Query term, q=search_term */
	query?: string
	/** Page of result set, starting at 1, p=1 */
	page?: number
	/** Size of page between 10 and 100, defaulted to s=20 */
	pageSize?: number
	/** Sort order A (ascending) or D (descending), so=A */
	sortOrder?: SortOrder
}

export enum SortOrder {
	ASCENDING = "A",
	DESCENDING = "D",
}

// => Params

export interface PeopleQuery extends GenericQuery {
	searchFields?: PeopleSearchFields[]
	sortFields?: PeopleSortFields
}

export interface ProjectsQuery extends GenericQuery {
	searchFields?: ProjectsSearchFields[]
	sortFields?: ProjectsSortFields
}

export interface OrganisationsQuery extends GenericQuery {
	searchFields?: OrganisationsSearchFields[]
	sortFields?: OrganisationsSortFields
}

export interface FundsQuery extends GenericQuery {
	searchFields?: FundsSearchFields[]
	sortFields?: FundsSortFields
}

export interface OutcomesQuery extends GenericQuery {
	sortFields?: OutcomesSortFields
}

export interface KeyFindingsQuery extends GenericQuery {
	searchFields?: KeyFindingsSearchFields[]
	sortFields?: KeyFindingsSortFields
}

export interface ImpactSummariesQuery extends GenericQuery {
	searchFields?: ImpactSummariesSearchFields[]
	sortFields?: ImpactSummariesSortFields
}

export interface PublicationsQuery extends GenericQuery {
	searchFields?: PublicationsSearchFields[]
	sortFields?: PublicationsSortFields
}

export interface CollaborationsQuery extends GenericQuery {
	searchFields?: CollaborationsSearchFields[]
	sortFields?: CollaborationsSortFields
}

export interface IntellectualPropertiesQuery extends GenericQuery {
	searchFields?: IntellectualPropertiesSearchFields[]
	sortFields?: IntellectualPropertiesSortFields
}

export interface PolicyInfluencesQuery extends GenericQuery {
	searchFields?: PolicyInfluencesSearchFields[]
	sortFields?: PolicyInfluencesSortFields
}

export interface ProductsQuery extends GenericQuery {
	searchFields?: ProductsSearchFields[]
	sortFields?: ProductsSortFields
}

export interface ResearchMaterialsQuery extends GenericQuery {
	searchFields?: ResearchMaterialsSearchFields[]
	sortFields?: ResearchMaterialsSortFields
}

export interface SpinoutsQuery extends GenericQuery {
	searchFields?: SpinoutsSearchFields[]
	sortFields?: SpinoutsSortFields
}

export interface FurtherFundingsQuery extends GenericQuery {
	searchFields?: FurtherFundingsSearchFields[]
	sortFields?: FurtherFundingsSortFields
}

export interface DisseminationsQuery extends GenericQuery {
	searchFields?: DisseminationsSearchFields[]
	sortFields?: DisseminationsSortFields
}

// => Enums

export enum DisseminationsSearchFields {
	PROJECT_ID = "dis.p",
	TITLE = "dis.t",
	DESCRIPTION = "dis.d",
	IMPACT = "dis.i",
	PRESENTATION_TYPE = "dis.pt",
	OUTCOME_ID = "dis.oid",
	GRANT_REF = "dis.gref",
}

export enum DisseminationsSortFields {
	RELEVANCE = "score",
}

export enum FurtherFundingsSearchFields {
	PROJECT_TITLE = "ff.p",
	TITLE = "ff.t",
	DESCRIPTION = "ff.d",
	SECTOR = "ff.s",
	FUNDING_ORGANISATION = "ff.org",
	FUNDING_ORGANISATION_DEPARTMENT = "ff.dept",
	FUNDING_ID = "ff.id",
	OUTCOME_ID = "ff.oid",
	GRANT_REF = "FF.gref",
}

export enum FurtherFundingsSortFields {
	RELEVANCE = "score",
}

export enum SpinoutsSearchFields {
	PROJECT_ID = "so.p",
	TITLE = "so.t",
	DESCRIPTION = "so.d",
	COMPANY_NAME = "so.cn",
	COMPANY_DESCRIPTION = "sn.cd",
	REGISTRATION_NUMBER = "so.reg",
	OUTCOME_ID = "so.oid",
	GRANT_REF = "so.gref",
}

export enum SpinoutsSortFields {
	RELEVANCE = "score",
}

export enum ResearchMaterialsSearchFields {
	PROJECT_ID = "rtp.p",
	TITLE = "rtp.t",
	DESCRIPTION = "rtp.d",
	IMPACT = "rtp.i",
	OUTCOME_ID = "rtp.oid",
	GRANT_REF = "rtp.gref",
}

export enum ResearchMaterialsSortFields {
	RELEVANCE = "score",
}

export enum ProductsSearchFields {
	PROJECT_ID = "prod.p",
	IMPACT = "prod.i",
	UKCRN_ISCTN_ID = "prod.uiid",
	OUTCOME_ID = "prod.oid",
	GRANT_REF = "prod.gref",
}

export enum ProductsSortFields {
	RELEVANCE = "score",
}

export enum PolicyInfluencesSearchFields {
	PROJECT_ID = "pol.p",
	IMPACT = "pol.i",
	GUIDELINE_TITLE = "pol.gt",
	DESCRIPTION = "pol.in",
	METHODS = "pol.meth",
	AREAS = "pol.area",
	OUTCOME_ID = "pol.oid",
	GRANT_REF = "pol.gref",
}

export enum PolicyInfluencesSortFields {
	RELEVANCE = "score",
}

export enum IntellectualPropertiesSearchFields {
	PROJECT_ID = "ip.p",
	TITLE = "ip.t",
	DESCRIPTION = "ip.d",
	IMPACT = "ip.i",
	PROTECTION = "ip.pro",
	PATENT_ID = "ip.pat",
	OUTCOME_ID = "ip.oid",
	GRANT_REF = "ip.gref",
}

export enum IntellectualPropertiesSortFields {
	RELEVANCE = "score",
}

export enum PeopleSearchFields {
	FIRST_NAME = "per.fn",
	FAMILY_NAME = "per.sn",
	FIRST_NAME_FAMILY_NAME = "per.fnsn",
	ORCID_ID = "per.orcidId",
	ORGANISATION_NAME = "per.org.n",
	PROJECT_TITLES = "per.pro.t",
	PROJECT_ABCSTRACTS = "per.pro.abs",
}

export enum PeopleSortFields {
	FIRST_NAME = "per.fn",
	FAMILY_NAME = "per.sn",
	RELEVANCE = "score",
}

export enum ProjectsSearchFields {
	PROJECT_REFERENCE = "pro.gr",
	PROJECT_TITLE = "pro.t",
	PROJECT_ABSTRACT = "pro.a",
	ORCID_ID = "pro.orcidId",
	RESEARCH_TOPICS = "pro.rt",
	HEALTH_ACTIVITIES = "pro.ha",
	RCUK_PROGRAMMES = "pro.rcukp",
	LEAD_FUNDER_NAME = "pro.lf",
}

export enum ProjectsSortFields {
	START_DATE = "pro.sd",
	END_DATE = "pro.ed",
	FUNDED_VALUE = "pro.am",
	RELEVANCE = "score",
}

export enum OrganisationsSearchFields {
	ORGANISATION_NAME = "org.n",
	PROJECT_TITLES = "org.pro.t",
	ORCID_ID = "org.orcidId",
	PROJECT_ABCSTRACTS = "org.pro.a",
}

export enum OrganisationsSortFields {
	ORGANISATION_NAME = "org.n",
	RELEVANCE = "score",
}

export enum FundsSearchFields {
	FUNDED_PROJECT_TITLE = "fu.pro.t",
	FUND_AMOUNT = "fu.am",
	FUNDER_ORGANISATION_NAME = "fu.org.n",
	FUND_TYPE = "fu.ty",
}

export enum FundsSortFields {
	FUND_START_DATE = "fu.sd",
	FUND_END_DATE = "fu.ed",
	FUND_AMOUNT = "fu.am",
	FUND_TYPE = "fu.ty",
	RELEVANCE = "score",
}

export enum OutcomesSortFields {
	RELEVANCE = "score",
}

export enum KeyFindingsSearchFields {
	PROJECT_ID = "kf.p",
	DESCRIPTION = "kf.d",
	SECTOR = "kf.s",
	EXPLOITATION_PATHWAYS = "kf.ep",
	NON_ACADEMIC_USERS = "kf.nau",
	OUTCOME_ID = "kf.oid",
	GRANT_REF = "kf.gref",
}

export enum KeyFindingsSortFields {
	RELEVANCE = "score",
}

export enum ImpactSummariesSearchFields {
	PROJECT_ID = "is.p",
	TITLE = "is.t",
	DESCRIPTION = "is.d",
	SECTOR = "is.s",
	BENEFICIARIES = "is.ben",
	CONTRIBUTION_METHOD = "is.cm",
	IMPACT_TYPES = "is.it",
	SUMMARY = "is.sum",
	OUTCOME_ID = "is.oid",
	GRANT_REF = "is.gref",
}

export enum ImpactSummariesSortFields {
	RELEVANCE = "score",
}

export enum PublicationsSearchFields {
	PROJECT_ID = "pub.p",
	TITLE = "pub.t",
	ABSTRACT = "pub.a",
	PROJECT_TITLE = "pub.pr.t",
	ISBN = "pub.isbn",
	ISSN = "pub.issn",
	PARENT_PUBLICATION = "pub.jt",
	PUBMED_ID = "pub.pmid",
	DOI = "pub.doi",
	OUTCOME_ID = "pub.oid",
	GRANT_REF = "pub.gref",
}

export enum PublicationsSortFields {
	DATE = "pub.date",
	RELEVANCE = "score",
}

export enum CollaborationsSearchFields {
	PROJECT_ID = "col.p",
	IMPACT = "col.i",
	DESCRIPTION = "col.d",
	SECTOR = "col.s",
	DEPARTMENT = "col.dept",
	ORGANISATION = "col.org",
	PARTNER_CONTRIBUTION = "col.pc",
	PRINCIPAL_INVESTIGATOR_CONTRIBUTION = "col.pic",
	OUTCOME_ID = "col.oid",
	GRANT_REF = "col.gref",
}

export enum CollaborationsSortFields {
	START_DATE = "col.std",
	RELEVANCE = "score",
}
