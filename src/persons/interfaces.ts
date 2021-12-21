import { Links, Paginated } from ".."

export interface PaginatedPersons extends Paginated {
	person: Person[]
}

export interface Person {
	links: Links[]
	id: string
	href: string
	created: Date
	firstName: string
	otherNames: string
	surname: string
	orcidId?: string
}
