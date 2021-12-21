import { Base } from "../base"
import { GenericFilterParams } from "../generic.interfaces"
import { Organisation, PaginatedOrganisations } from "./interfaces"

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

	public async getProjectOrganisations(
		id: string
	): Promise<PaginatedOrganisations> {
		const url = `${this.baseUrl}/projects/${id}/organisations`
		return this.get<PaginatedOrganisations>(url)
	}

	public async getPersonOrganisations(
		id: string
	): Promise<PaginatedOrganisations> {
		const url = `${this.baseUrl}/persons/${id}/organisations`
		return this.get<PaginatedOrganisations>(url)
	}
}
