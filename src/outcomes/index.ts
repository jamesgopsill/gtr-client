import { FilterParams } from ".."
import { Base } from "../base"
import {
	Collaboration,
	FutureFunding,
	ImpactSummary,
	KeyFinding,
	PaginatedCollaborations,
	PaginatedImpactSummaries,
	PaginatedKeyFindings,
	PaginatedOutcomes,
	PaginatedPublications,
	Publication,
} from "./interfaces"

export class Outcomes extends Base {
	protected processCollaborationDates(c: Collaboration) {
		c.created = new Date(c.created)
		c.start = new Date(c.start)
		this.processLinksDates(c.links)
	}

	protected processFurtherFundingDates(f: FutureFunding) {
		f.start = new Date(f.start)
		f.end = new Date(f.end)
		f.created = new Date(f.created)
		this.processLinksDates(f.links)
	}

	protected processKeyFindingDates(k: KeyFinding) {
		k.created = new Date(k.created)
		this.processLinksDates(k.links)
	}

	protected processImpactSummaryDates(impact: ImpactSummary) {
		impact.created = new Date(impact.created)
		this.processLinksDates(impact.links)
	}

	protected processPublicationDates(p: Publication) {
		p.created = new Date(p.created)
		p.datePublished = new Date(p.datePublished)
		this.processLinksDates(p.links)
	}

	// #######################

	public async getOutcomes(params?: FilterParams): Promise<PaginatedOutcomes> {
		const url = `${this.baseURL}/outcomes`
		const res = await this.get<PaginatedOutcomes>(url, params)
		for (const c of res.collaboration) {
			this.processCollaborationDates(c)
		}
		for (const f of res.furtherFunding) {
			this.processFurtherFundingDates(f)
		}
		for (const impact of res.impactSummary) {
			this.processImpactSummaryDates(impact)
		}
		for (const k of res.keyFinding) {
			this.processKeyFindingDates(k)
		}
		for (const p of res.publication) {
			this.processPublicationDates(p)
		}
		return res
	}

	public async getKeyFindings(
		params?: FilterParams
	): Promise<PaginatedKeyFindings> {
		const url = `${this.baseURL}/outcomes/keyfindings`
		const res = await this.get<PaginatedKeyFindings>(url, params)
		for (const k of res.keyFinding) {
			this.processKeyFindingDates(k)
		}
		return res
	}

	public async getKeyFinding(id: string): Promise<KeyFinding> {
		const url = `${this.baseURL}/outcomes/keyfindings/${id}`
		const res = await this.get<KeyFinding>(url)
		this.processKeyFindingDates(res)
		return res
	}

	public async getImpactSummaries(
		params?: FilterParams
	): Promise<PaginatedImpactSummaries> {
		const url = `${this.baseURL}/outcomes/impactsummaries`
		const res = await this.get<PaginatedImpactSummaries>(url, params)
		for (const impact of res.impactSummary) {
			this.processImpactSummaryDates(impact)
		}
		return res
	}

	public async getImpactSummary(id: string): Promise<ImpactSummary> {
		const url = `${this.baseURL}/outcomes/impactsummaries/${id}`
		const res = await this.get<ImpactSummary>(url)
		this.processImpactSummaryDates(res)
		return res
	}

	public async getPublications(
		params?: FilterParams
	): Promise<PaginatedPublications> {
		const url = `${this.baseURL}/outcomes/publications`
		const res = await this.get<PaginatedPublications>(url, params)
		for (const p of res.publication) {
			this.processPublicationDates(p)
		}
		return res
	}

	public async getPublication(id: string): Promise<Publication> {
		const url = `${this.baseURL}/outcomes/publications/${id}`
		const res = await this.get<Publication>(url)
		this.processPublicationDates(res)
		return res
	}

	public async getCollaborations(
		params?: FilterParams
	): Promise<PaginatedCollaborations> {
		const url = `${this.baseURL}/outcomes/collaborations`
		const res = await this.get<PaginatedCollaborations>(url, params)
		for (const c of res.collaboration) {
			this.processCollaborationDates(c)
		}
		return res
	}

	public async getCollaboration(id: string): Promise<Collaboration> {
		const url = `${this.baseURL}/outcomes/collaborations/${id}`
		const res = await this.get<Collaboration>(url)
		this.processCollaborationDates(res)
		return res
	}
}
