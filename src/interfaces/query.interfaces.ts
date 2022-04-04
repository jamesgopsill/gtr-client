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

export interface GetImpactSummariesQuery extends GenericQuery {
	searchFields?: GetImpactSummariesSearchFields[]
	sortFields?: GetImpactSummariesSortFields
}

export interface GetPublicationsQuery extends GenericQuery {
	searchFields?: GetPublicationsSearchFields[]
	sortFields?: GetPublicationsSortFields
}

export interface GetCollaborationsQuery extends GenericQuery {
	searchFields?: GetCollaborationsSearchFields[]
	sortFields?: GetCollaborationsSortFields
}

export interface GetIntellectualPropertiesQuery extends GenericQuery {
	searchFields?: GetIntellectualPropertiesSearchFields[]
	sortFields?: GetIntellectualPropertiesSortFields
}

export interface GetPolicyInfluencesQuery extends GenericQuery {
	searchFields?: GetPolicyInfluencesSearchFields[]
	sortFields?: GetPolicyInfluencesSortFields
}

export interface GetProductsQuery extends GenericQuery {
	searchFields?: GetProductsSearchFields[]
	sortFields?: GetProductsSortFields
}

export interface GetResearchMaterialsQuery extends GenericQuery {
	searchFields?: GetResearchMaterialsSearchFields[]
	sortFields?: GetResearchMaterialsSortFields
}

export interface GetSpinoutsQuery extends GenericQuery {
	searchFields?: GetSpinoutsSearchFields[]
	sortFields?: GetSpinoutsSortFields
}

export interface GetFurtherFundingsQuery extends GenericQuery {
	searchFields?: GetFurtherFundingsSearchFields[]
	sortFields?: GetFurtherFundingsSortFields
}

export interface GetDisseminationsQuery extends GenericQuery {
	searchFields?: GetDisseminationsSearchFields[]
	sortFields?: GetDisseminationsSortFields
}

// => Enums

export enum GetDisseminationsSearchFields {
	PROJECT_ID = "dis.p",
	TITLE = "dis.t",
	DESCRIPTION = "dis.d",
	IMPACT = "dis.i",
	PRESENTATION_TYPE = "dis.pt",
	OUTCOME_ID = "dis.oid",
	GRANT_REF = "dis.gref",
}

export enum GetDisseminationsSortFields {
	RELEVANCE = "score",
}

export enum GetFurtherFundingsSearchFields {
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

export enum GetFurtherFundingsSortFields {
	RELEVANCE = "score",
}

export enum GetSpinoutsSearchFields {
	PROJECT_ID = "so.p",
	TITLE = "so.t",
	DESCRIPTION = "so.d",
	COMPANY_NAME = "so.cn",
	COMPANY_DESCRIPTION = "sn.cd",
	REGISTRATION_NUMBER = "so.reg",
	OUTCOME_ID = "so.oid",
	GRANT_REF = "so.gref",
}

export enum GetSpinoutsSortFields {
	RELEVANCE = "score",
}

export enum GetResearchMaterialsSearchFields {
	PROJECT_ID = "rtp.p",
	TITLE = "rtp.t",
	DESCRIPTION = "rtp.d",
	IMPACT = "rtp.i",
	OUTCOME_ID = "rtp.oid",
	GRANT_REF = "rtp.gref",
}

export enum GetResearchMaterialsSortFields {
	RELEVANCE = "score",
}

export enum GetProductsSearchFields {
	PROJECT_ID = "prod.p",
	IMPACT = "prod.i",
	UKCRN_ISCTN_ID = "prod.uiid",
	OUTCOME_ID = "prod.oid",
	GRANT_REF = "prod.gref",
}

export enum GetProductsSortFields {
	RELEVANCE = "score",
}

export enum GetPolicyInfluencesSearchFields {
	PROJECT_ID = "pol.p",
	IMPACT = "pol.i",
	GUIDELINE_TITLE = "pol.gt",
	DESCRIPTION = "pol.in",
	METHODS = "pol.meth",
	AREAS = "pol.area",
	OUTCOME_ID = "pol.oid",
	GRANT_REF = "pol.gref",
}

export enum GetPolicyInfluencesSortFields {
	RELEVANCE = "score",
}

export enum GetIntellectualPropertiesSearchFields {
	PROJECT_ID = "ip.p",
	TITLE = "ip.t",
	DESCRIPTION = "ip.d",
	IMPACT = "ip.i",
	PROTECTION = "ip.pro",
	PATENT_ID = "ip.pat",
	OUTCOME_ID = "ip.oid",
	GRANT_REF = "ip.gref",
}

export enum GetIntellectualPropertiesSortFields {
	RELEVANCE = "score",
}

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

export enum GetImpactSummariesSearchFields {
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

export enum GetImpactSummariesSortFields {
	RELEVANCE = "score",
}

export enum GetPublicationsSearchFields {
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

export enum GetPublicationsSortFields {
	DATE = "pub.date",
	RELEVANCE = "score",
}

export enum GetCollaborationsSearchFields {
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

export enum GetCollaborationsSortFields {
	START_DATE = "col.std",
	RELEVANCE = "score",
}
