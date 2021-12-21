import {
	GenericFilterParams,
	Organisation,
	PaginatedOrganisations,
	PaginatedPersons,
	PaginatedProjects,
} from ".."
import { Base } from "../base"

export class Organisations extends Base {
	public async getOrganisations(
		params: GenericFilterParams = {}
	): Promise<PaginatedOrganisations> {
		const url = `${this.baseUrl}/organisations`
		return this.get<PaginatedOrganisations>(url, params)
	}

	public async getOrganisation(id: string): Promise<Organisation> {
		const url = `${this.baseUrl}/organisations/${id}`
		return this.get<Organisation>(url)
	}

	public async getOrganisationsProjects(
		id: string
	): Promise<PaginatedProjects> {
		const url = `${this.baseUrl}/organisations/${id}/projects`
		return this.get<PaginatedProjects>(url)
	}

	public async getOrganisationsPersons(id: string): Promise<PaginatedPersons> {
		const url = `${this.baseUrl}/organisations/${id}/persons`
		return this.get<PaginatedPersons>(url)
	}
}
