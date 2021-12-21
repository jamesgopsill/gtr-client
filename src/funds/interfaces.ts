import { FilterParamsBase, Link, Paginated } from "../generic.interfaces"

export interface PaginatedFunds extends Paginated {
	fund: Fund[]
}

export interface Fund {
	links: {
		link: Link[]
	}
	id: string
	href: string
	created: Date
	start: Date
	end: Date
	valuePounds: {
		currencyCode: string
		amount: number
	}
	category: string
}

export enum FundsSearchField {
	FUNDED_PROJECT_TITLE = "fu.pro.t",
	FUND_AMOUNT = "fu.am",
	FUNDER_ORGANISATION_NAME = "fu.org.n",
	FUND_TYPE = "fu.ty",
}

export enum FundsSortField {
	FUND_START_DATE = "fu.sd",
	FUND_AMOUNT = "fu.am",
	FUND_TYPE = "fu.ty",
	FUND_END_DATE = "fu.ed",
	RELEVANCE = "score",
}

export interface FundFilterParams extends FilterParamsBase {
	f?: FundsSearchField[]
	sf?: FundsSortField
}
