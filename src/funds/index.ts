import { Base } from "../base"
import { FilterParams } from "../generic.interfaces"
import { Fund, PaginatedFunds } from "./interfaces"

export class Funds extends Base {
	protected processFund(fund: Fund) {
		fund.created = new Date(fund.created)
		fund.start = new Date(fund.start)
		fund.end = new Date(fund.end)
		for (const link of fund.links.link) {
			link.start = new Date(link.start)
			link.end = new Date(link.end)
		}
	}

	public async getFunds(params: FilterParams = {}): Promise<PaginatedFunds> {
		const url = `${this.baseURL}/funds`
		const res = await this.get<PaginatedFunds>(url, params)
		for (const fund of res.fund) {
			this.processFund(fund)
		}
		return res
	}

	public async getFund(id: string): Promise<Fund> {
		const url = `${this.baseURL}/funds/${id}`
		const fund = await this.get<Fund>(url)
		this.processFund(fund)
		return fund
	}

	public async getProjectFunds(id: string): Promise<PaginatedFunds> {
		const url = `${this.baseURL}/projects/${id}/funds`
		const res = await this.get<PaginatedFunds>(url)
		for (const fund of res.fund) {
			this.processFund(fund)
		}
		return res
	}

	public async getOrganisationFunds(id: string): Promise<PaginatedFunds> {
		const url = `${this.baseURL}/organisations/${id}/funds`
		const res = await this.get<PaginatedFunds>(url)
		for (const fund of res.fund) {
			this.processFund(fund)
		}
		return res
	}
}
