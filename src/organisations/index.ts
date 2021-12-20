import { Base } from "../base"
import { FilterParams } from "../generic.interfaces"
import { Organisation, PaginatedOrganisations } from "./interfaces"

export class Organisations extends Base {
	protected processOrganisation(organisation: Organisation) {
		organisation.created = new Date(organisation.created)
		for (const address of organisation.addresses.address) {
			address.created = new Date(address.created)
		}
	}

	public async getOrganisations(
		params: FilterParams = {}
	): Promise<PaginatedOrganisations> {
		const url = `${this.baseURL}/organisations`
		const res = await this.get<PaginatedOrganisations>(url, params)
		for (const organisation of res.organisation) {
			this.processOrganisation(organisation)
		}
		return res
	}

	public async getOrganisation(id: string): Promise<Organisation> {
		const url = `${this.baseURL}/organisations/${id}`
		const res = await this.get<Organisation>(url)
		this.processOrganisation(res)
		return res
	}

	public async getProjectOrganisations(
		id: string
	): Promise<PaginatedOrganisations> {
		const url = `${this.baseURL}/projects/${id}/organisations`
		const res = await this.get<PaginatedOrganisations>(url)
		for (const organisation of res.organisation) {
			this.processOrganisation(organisation)
		}
		return res
	}

	public async getPersonOrganisations(
		id: string
	): Promise<PaginatedOrganisations> {
		const url = `${this.baseURL}/persons/${id}/organisations`
		const res = await this.get<PaginatedOrganisations>(url)
		for (const organisation of res.organisation) {
			this.processOrganisation(organisation)
		}
		return res
	}
}
