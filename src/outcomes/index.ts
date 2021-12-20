import { Base } from "../base"
import { FilterParams } from "../generic.interfaces"
import {
	Collaboration,
	FurtherFunding,
	ImpactSummary,
	IntellectualProperty,
	KeyFinding,
	PaginatedCollaborations,
	PaginatedImpactSummaries,
	PaginatedIntellectualProperties,
	PaginatedKeyFindings,
	PaginatedOutcomes,
	PaginatedPolicyInfluences,
	PaginatedProducts,
	PaginatedPublications,
	PaginatedResearchMaterials,
	PaginatedSpinOuts,
	PolicyInfluence,
	Product,
	Publication,
	ResearchMaterial,
	SpinOut,
} from "./interfaces"

export class Outcomes extends Base {
	public async getOutcomes(params?: FilterParams): Promise<PaginatedOutcomes> {
		const url = `${this.baseUrl}/outcomes`
		return this.get<PaginatedOutcomes>(url, params)
	}

	public async getKeyFindings(
		params?: FilterParams
	): Promise<PaginatedKeyFindings> {
		const url = `${this.baseUrl}/outcomes/keyfindings`
		return this.get<PaginatedKeyFindings>(url, params)
	}

	public async getKeyFinding(id: string): Promise<KeyFinding> {
		const url = `${this.baseUrl}/outcomes/keyfindings/${id}`
		return this.get<KeyFinding>(url)
	}

	public async getImpactSummaries(
		params?: FilterParams
	): Promise<PaginatedImpactSummaries> {
		const url = `${this.baseUrl}/outcomes/impactsummaries`
		return this.get<PaginatedImpactSummaries>(url, params)
	}

	public async getImpactSummary(id: string): Promise<ImpactSummary> {
		const url = `${this.baseUrl}/outcomes/impactsummaries/${id}`
		return this.get<ImpactSummary>(url)
	}

	public async getPublications(
		params?: FilterParams
	): Promise<PaginatedPublications> {
		const url = `${this.baseUrl}/outcomes/publications`
		return this.get<PaginatedPublications>(url, params)
	}

	public async getPublication(id: string): Promise<Publication> {
		const url = `${this.baseUrl}/outcomes/publications/${id}`
		return this.get<Publication>(url)
	}

	public async getCollaborations(
		params?: FilterParams
	): Promise<PaginatedCollaborations> {
		const url = `${this.baseUrl}/outcomes/collaborations`
		return this.get<PaginatedCollaborations>(url, params)
	}

	public async getCollaboration(id: string): Promise<Collaboration> {
		const url = `${this.baseUrl}/outcomes/collaborations/${id}`
		return this.get<Collaboration>(url)
	}

	public async getIntellectualProperties(
		params?: FilterParams
	): Promise<PaginatedIntellectualProperties> {
		const url = `${this.baseUrl}/outcomes/intellectualproperties`
		return this.get<PaginatedIntellectualProperties>(url, params)
	}

	public async getIntellectualProperty(
		id: string
	): Promise<IntellectualProperty> {
		const url = `${this.baseUrl}/outcomes/intellectualproperties/${id}`
		return this.get<IntellectualProperty>(url)
	}

	public async getPolicyInfluences(
		params?: FilterParams
	): Promise<PaginatedPolicyInfluences> {
		const url = `${this.baseUrl}/outcomes/policyinfluences`
		return this.get<PaginatedPolicyInfluences>(url, params)
	}

	public async getPolicyInfluence(id: string): Promise<PolicyInfluence> {
		const url = `${this.baseUrl}/outcomes/policyinfluences/${id}`
		return this.get<PolicyInfluence>(url)
	}

	public async getProducts(params?: FilterParams): Promise<PaginatedProducts> {
		const url = `${this.baseUrl}/outcomes/products`
		return this.get<PaginatedProducts>(url, params)
	}

	public async getProduct(id: string): Promise<Product> {
		const url = `${this.baseUrl}/outcomes/products/${id}`
		return this.get<Product>(url)
	}

	public async getResearchMaterials(
		params?: FilterParams
	): Promise<PaginatedResearchMaterials> {
		const url = `${this.baseUrl}/outcomes/researchmaterials`
		return this.get<PaginatedResearchMaterials>(url, params)
	}

	public async getResearchMaterial(id: string): Promise<ResearchMaterial> {
		const url = `${this.baseUrl}/outcomes/researchmaterials/${id}`
		return this.get<ResearchMaterial>(url)
	}

	public async getSpinOuts(params?: FilterParams): Promise<PaginatedSpinOuts> {
		const url = `${this.baseUrl}/outcomes/spinouts`
		return this.get<PaginatedSpinOuts>(url, params)
	}

	public async getSpinOut(id: string): Promise<SpinOut> {
		const url = `${this.baseUrl}/outcomes/spinouts/${id}`
		return this.get<SpinOut>(url)
	}

	public async getFurtherFundings(params?: FilterParams): Promise<any> {
		const url = `${this.baseUrl}/outcomes/furtherfundings`
		return this.get<any>(url, params)
	}

	public async getFurtherFunding(id: string): Promise<FurtherFunding> {
		const url = `${this.baseUrl}/outcomes/furtherfundings/${id}`
		return this.get<FurtherFunding>(url)
	}
}
