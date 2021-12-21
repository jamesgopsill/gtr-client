import {
	GenericFilterParams,
	PaginatedOrganisations,
	PaginatedPersons,
	Person,
} from ".."
import { Base } from "../base"

export class Persons extends Base {
	public async getPersons(params?: GenericFilterParams) {
		const url = `${this.baseUrl}/persons`
		return this.get<PaginatedPersons>(url)
	}

	public async getPerson(id: string) {
		const url = `${this.baseUrl}/persons/${id}`
		return this.get<Person>(url)
	}

	public async getPersonOrganisations(
		id: string
	): Promise<PaginatedOrganisations> {
		const url = `${this.baseUrl}/persons/${id}/organisations`
		return this.get<PaginatedOrganisations>(url)
	}
}
