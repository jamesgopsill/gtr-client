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

export interface GetPeopleQuery extends GenericQuery {
	searchFields?: GetPeopleSearchFields[]
	sortFields?: GetPeopleSortFields
}

export interface GetProjectsQuery extends GenericQuery {
	searchFields?: GetProjectsSearchFields[]
	sortFields?: GetProjectsSortFields
}

export interface GetOrganisationsQuery extends GenericQuery {
	searchFields?: GetOrganisationsSearchFields[]
	sortFields?: GetOrganisationsSortFields
}

export interface GetFundsQuery extends GenericQuery {
	searchFields?: GetFundsSearchFields[]
	sortFields?: GetFundsSortFields
}

export interface GetOutcomesQuery extends GenericQuery {
	sortFields?: GetOutcomesSortFields
}

export interface GetKeyFindingsQuery extends GenericQuery {
	searchFields?: GetKeyFindingsSearchFields[]
	sortFields?: GetKeyFindingsSortFields
}

// => Enums

export enum GetPeopleSearchFields {
	FIRST_NAME = "per.fn",
	FAMILY_NAME = "per.sn",
	FIRST_NAME_FAMILY_NAME = "per.fnsn",
	ORCID_ID = "per.orcidId",
	ORGANISATION_NAME = "per.org.n",
	PROJECT_TITLES = "per.pro.t",
	PROJECT_ABCSTRACTS = "per.pro.abs",
}

export enum GetPeopleSortFields {
	FIRST_NAME = "per.fn",
	FAMILY_NAME = "per.sn",
	RELEVANCE = "score",
}

export enum GetProjectsSearchFields {
	PROJECT_REFERENCE = "pro.gr",
	PROJECT_TITLE = "pro.t",
	PROJECT_ABSTRACT = "pro.a",
	ORCID_ID = "pro.orcidId",
	RESEARCH_TOPICS = "pro.rt",
	HEALTH_ACTIVITIES = "pro.ha",
	RCUK_PROGRAMMES = "pro.rcukp",
	LEAD_FUNDER_NAME = "pro.lf",
}

export enum GetProjectsSortFields {
	START_DATE = "pro.sd",
	END_DATE = "pro.ed",
	FUNDED_VALUE = "pro.am",
	RELEVANCE = "score",
}

export enum GetOrganisationsSearchFields {
	ORGANISATION_NAME = "org.n",
	PROJECT_TITLES = "org.pro.t",
	ORCID_ID = "org.orcidId",
	PROJECT_ABCSTRACTS = "org.pro.a",
}

export enum GetOrganisationsSortFields {
	ORGANISATION_NAME = "org.n",
	RELEVANCE = "score",
}

export enum GetFundsSearchFields {
	FUNDED_PROJECT_TITLE = "fu.pro.t",
	FUND_AMOUNT = "fu.am",
	FUNDER_ORGANISATION_NAME = "fu.org.n",
	FUND_TYPE = "fu.ty",
}

export enum GetFundsSortFields {
	FUND_START_DATE = "fu.sd",
	FUND_END_DATE = "fu.ed",
	FUND_AMOUNT = "fu.am",
	FUND_TYPE = "fu.ty",
	RELEVANCE = "score",
}

export enum GetOutcomesSortFields {
	RELEVANCE = "score",
}

export enum GetKeyFindingsSearchFields {
	PROJECT_ID = "kf.p",
	DESCRIPTION = "kf.d",
	SECTOR = "kf.s",
	EXPLOITATION_PATHWAYS = "kf.ep",
	NON_ACADEMIC_USERS = "kf.nau",
	OUTCOME_ID = "kf.oid",
	GRANT_REF = "kf.gref",
}

export enum GetKeyFindingsSortFields {
	RELEVANCE = "score",
}
