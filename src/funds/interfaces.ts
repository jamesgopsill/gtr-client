import { Link, Paginated } from "../generic.interfaces"

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
