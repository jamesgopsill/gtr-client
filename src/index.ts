import { fetch } from "cross-fetch"
import * as i from "./interfaces"
import { getObjectMethods, getObjectsMethods } from "./methods"
import { ResponseError } from "./response-error"

export * from "./interfaces"
export { ResponseError } from "./response-error"

// The CtrClient class to construct the API from
export class GtrClient {
	protected baseUrl = "https://gtr.ukri.org/gtr/api"
	public debug: boolean

	constructor(debug: boolean = false) {
		this.debug = debug
		// Create the get objects methods
		for (const method of getObjectsMethods) {
			//@ts-ignore: Not exactly sure why but it's something about the key value (ts(7053))
			this[method.name] = (params: {}) => {
				return this.getObjects(method.path, params)
			}
		}
		// Add the get object methods
		for (const method of getObjectMethods) {
			//@ts-ignore
			this[method.name] = (id: string) => {
				return this.getObject(id, method.path)
			}
		}
	}

	protected async get(
		url: string,
		params: { [name: string]: any } = {}
	): Promise<any> {
		// Perform key conversion
		let requestParams: any = {}
		const keyConversions = {
			query: "q",
			page: "p",
			pageSize: "s",
			sort: "so",
			searchFields: "f",
			sortFields: "sf",
		}

		for (const [key, value] of Object.entries(keyConversions)) {
			if (params[key]) {
				requestParams[value] = params[key]
			}
		}

		// Add additional search params
		if (Object.keys(params).length !== 0) {
			url += "?" + new URLSearchParams(requestParams).toString()
		}

		if (this.debug) console.log(`|- Query: ${url}`)

		const config: RequestInit = {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/vnd.rcuk.gtr.json-v7",
			},
		}

		return fetch(url, config).then(async (r) => {
			if (r.ok) {
				const json = await r.json()
				this.recursiveProcessObjectDates(json)
				return json
			}
			throw new ResponseError(r)
		})
	}

	protected recursiveProcessObjectDates(obj: any) {
		Object.keys(obj).forEach((key) => {
			// If the object is a number and it has a length of 13 then consider it as a date
			if (typeof obj[key] == "number") {
				if (obj[key].toString().length == 13) {
					// console.log("Date Found")
					obj[key] = new Date(obj[key])
				}
			}
			// If it is an array then iterate through the objects and perform the recursive process objects
			if (typeof obj[key] == "object" && Array.isArray(obj[key])) {
				for (const el of obj[key]) {
					// console.log(el)
					this.recursiveProcessObjectDates(el)
				}
			}
			// if it is an object then process it
			if (typeof obj[key] == "object" && Array.isArray(obj[key]) == false) {
				this.recursiveProcessObjectDates(obj[key])
			}
		})
	}

	protected async getObject(id: string, path: string): Promise<any> {
		const url = `${this.baseUrl}/${path}/${id}`
		return this.get(url)
	}

	protected async getObjects(path: string, params: {} = {}): Promise<any> {
		const url = `${this.baseUrl}/${path}`
		return this.get(url, params)
	}

	protected async getAssociatedObjects(id: string, path: string): Promise<any> {
		let url = `${this.baseUrl}/${path}`
		url = url.replace(":id", id)
		return this.get(url)
	}
}

// Details of the additional methods added programmatically to the GtrClient
export interface GtrClient {
	// methods implementing getObjects()

	/**
	 * Retrieves information about the people on the GtR database.
	 */
	getPeople: (params?: i.GetPeopleQuery) => Promise<i.PaginatedPersons>

	/**
	 * Retrieve information about the projects on the GtR database.
	 */
	getProjects: (params?: i.GetProjectsQuery) => Promise<i.PaginatedProjects>

	/**
	 * Retrieve information about the organisations on the GtR database.
	 */
	getOrganisations: (
		params?: i.GetOrganisationsQuery
	) => Promise<i.PaginatedOrganisations>

	/**
	 * Retrieve information about the funds on the GtR database.
	 */
	getFunds: (params?: i.GetFundsQuery) => Promise<i.PaginatedFunds>

	/**
	 * Retrieve information about the outcomes on the GtR database.
	 */
	getOutcomes: (params?: i.GetOutcomesQuery) => Promise<i.PaginatedOutcomes>

	/**
	 * Retrieve information about the key findings on the GtR database.
	 */
	getKeyFindings: (
		params?: i.GetKeyFindingsQuery
	) => Promise<i.PaginatedKeyFindings>
	getImpactSummaries: () => Promise<i.PaginatedImpactSummaries>
	getPublications: () => Promise<i.PaginatedPublications>
	getCollaborations: () => Promise<i.PaginatedCollaborations>
	getIntellectualProperties: () => Promise<i.PaginatedIntellectualProperties>
	getPolicyInfluences: () => Promise<i.PaginatedPolicyInfluences>
	getProducts: () => Promise<i.PaginatedProducts>
	getResearchMaterials: () => Promise<i.PaginatedResearchMaterials>
	getSpinouts: () => Promise<i.PaginatedSpinOuts>
	getFurtherFundings: () => Promise<i.PaginatedFurtherFunding>
	getDisseminations: () => Promise<i.PaginatedDissemination>
	// getObject Methods
	//
	getPerson: (id: string) => Promise<i.Person>
	getOrganisation: (id: string) => Promise<i.Organisation>
	getFund: (id: string) => Promise<i.Fund>
	getKeyFinding: (id: string) => Promise<i.KeyFinding>
	getImpactSummary: (id: string) => Promise<i.ImpactSummary>
	getPublication: (id: string) => Promise<i.Publication>
	getCollaboration: (id: string) => Promise<i.Collaboration>
	getIntellectualProperty: (id: string) => Promise<i.PolicyInfluence>
	getProduct: (id: string) => Promise<i.Product>
	getResearchMaterial: (id: string) => Promise<i.ResearchMaterial>
	getSpinOut: (id: string) => Promise<i.SpinOut>
	getFurtherFunding: (id: string) => Promise<i.FurtherFunding>
	getDissemination: (id: string) => Promise<i.Dissemination>
	// getAssociatedObjects Methods
	//
	getPersonProjects: (id: string) => Promise<i.PaginatedProjects>
	getPersonOrganisations: (id: string) => Promise<i.PaginatedProjects>
	getProjectFunds: (id: string) => Promise<i.PaginatedFunds>
	getProjectOrganisations: (id: string) => Promise<i.PaginatedOrganisations>
	getProjectPersons: (id: string) => Promise<i.PaginatedPersons>
	getProjectOutcomes: (id: string) => Promise<i.Outcomes>
	getProjectKeyFindings: (id: string) => Promise<i.PaginatedKeyFindings>
	getProjectImpactSummaries: (id: string) => Promise<i.PaginatedImpactSummaries>
	getProjectPublications: (id: string) => Promise<i.PaginatedPublications>
	getProjectCollaborations: (id: string) => Promise<i.PaginatedCollaborations>
	getProjectIntellectualProperties: (
		id: string
	) => Promise<i.PaginatedIntellectualProperties>
	getProjectProducts: (id: string) => Promise<i.PaginatedProducts>
	getProjectResearchMaterials: (
		id: string
	) => Promise<i.PaginatedResearchMaterials>
	getProjectSpinOuts: (id: string) => Promise<i.PaginatedSpinOuts>
	getProjectDisseminations: (id: string) => Promise<i.PaginatedDissemination>
}
