import {
	GenericFilterParams,
	PaginatedOrganisations,
	PaginatedProjects,
} from ".."
import { Base } from "../base"

export class Projects extends Base {
	public async getProjects(params?: GenericFilterParams) {
		const url = `${this.baseUrl}/projects`
		return this.get<PaginatedProjects>(url)
	}

	public async getProjectOrganisations(
		id: string
	): Promise<PaginatedOrganisations> {
		const url = `${this.baseUrl}/projects/${id}/organisations`
		return this.get<PaginatedOrganisations>(url)
	}
}
