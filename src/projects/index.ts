import {
	GenericFilterParams,
	PaginatedCollaborations,
	PaginatedDissemination,
	PaginatedFurtherFunding,
	PaginatedImpactSummaries,
	PaginatedIntellectualProperties,
	PaginatedKeyFindings,
	PaginatedOrganisations,
	PaginatedOutcomes,
	PaginatedPolicyInfluences,
	PaginatedProducts,
	PaginatedProjects,
	PaginatedPublications,
	PaginatedResearchMaterials,
	PaginatedSpinOuts,
	Project,
} from ".."
import { Base } from "../base"

export class Projects extends Base {
	public async getProjects(params?: GenericFilterParams) {
		const url = `${this.baseUrl}/projects`
		return this.get<PaginatedProjects>(url)
	}

	public async getProject(id: string) {
		const url = `${this.baseUrl}/projects/${id}`
		return this.get<Project>(url)
	}

	public async getProjectOrganisations(
		id: string
	): Promise<PaginatedOrganisations> {
		const url = `${this.baseUrl}/projects/${id}/organisations`
		return this.get<PaginatedOrganisations>(url)
	}

	public async getProjectOutcomes(id: string): Promise<PaginatedOutcomes> {
		const url = `${this.baseUrl}/projects/${id}/outcomes`
		return this.get<PaginatedOutcomes>(url)
	}

	public async getProjectKeyFindings(
		id: string
	): Promise<PaginatedKeyFindings> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/keyfindings`
		return this.get<PaginatedKeyFindings>(url)
	}

	public async getProjectImpactSummaries(
		id: string
	): Promise<PaginatedImpactSummaries> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/impactsummaries`
		return this.get<PaginatedImpactSummaries>(url)
	}

	public async getProjectPublications(
		id: string
	): Promise<PaginatedPublications> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/publications`
		return this.get<PaginatedPublications>(url)
	}

	public async getProjectCollaborations(
		id: string
	): Promise<PaginatedCollaborations> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/collaborations`
		return this.get<PaginatedCollaborations>(url)
	}

	public async getProjectIntellectualProperties(
		id: string
	): Promise<PaginatedIntellectualProperties> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/intellectualproperties`
		return this.get<PaginatedIntellectualProperties>(url)
	}

	public async getProjectFurtherFunding(
		id: string
	): Promise<PaginatedFurtherFunding> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/furtherfundings`
		return this.get<PaginatedFurtherFunding>(url)
	}

	public async getProjectPolicyInfluences(
		id: string
	): Promise<PaginatedPolicyInfluences> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/policyinfluences`
		return this.get<PaginatedPolicyInfluences>(url)
	}

	public async getProjectProducts(id: string): Promise<PaginatedProducts> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/products`
		return this.get<PaginatedProducts>(url)
	}

	public async getProjectResearchMaterials(
		id: string
	): Promise<PaginatedResearchMaterials> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/researchmaterials`
		return this.get<PaginatedResearchMaterials>(url)
	}

	public async getProjectSpinOuts(id: string): Promise<PaginatedSpinOuts> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/spinouts`
		return this.get<PaginatedSpinOuts>(url)
	}

	public async getProjectDisseminations(
		id: string
	): Promise<PaginatedDissemination> {
		const url = `${this.baseUrl}/projects/${id}/outcomes/disseminations`
		return this.get<PaginatedDissemination>(url)
	}
}
