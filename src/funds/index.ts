import { Base } from "../base"
import { FilterParams } from "../generic.interfaces"
import { Fund, PaginatedFunds } from "./interfaces"

export class Funds extends Base {
	public async getFunds(params: FilterParams = {}): Promise<PaginatedFunds> {
		const url = `${this.baseUrl}/funds`
		return this.get<PaginatedFunds>(url, params)
	}

	public async getFund(id: string): Promise<Fund> {
		const url = `${this.baseUrl}/funds/${id}`
		return this.get<Fund>(url)
	}

	public async getProjectFunds(id: string): Promise<PaginatedFunds> {
		const url = `${this.baseUrl}/projects/${id}/funds`
		return this.get<PaginatedFunds>(url)
	}

	public async getOrganisationFunds(id: string): Promise<PaginatedFunds> {
		const url = `${this.baseUrl}/organisations/${id}/funds`
		return this.get<PaginatedFunds>(url)
	}
}
