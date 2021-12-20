import { Link, Paginated } from "../generic.interfaces"

export interface PaginatedOrganisations extends Paginated {
	organisation: any[]
}

export interface Organisation {
	links: {
		link: Link[]
	}
	id: string
	href: string
	created: Date
	addresses: {
		address: Address[]
	}
}

export interface Address {
	id: string
	created: Date
	line1: string
	line2: string
	postCode: string
	region: string
	country: string
	type: string
}
