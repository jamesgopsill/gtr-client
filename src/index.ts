import { fetch } from "cross-fetch"
import * as interfaces from "./interfaces"
import { getObjectMethods, getObjectsMethods } from "./methods"

export * from "./interfaces"

// New error type to handle response errors.
export class ResponseError extends Error {
	public response: Response

	constructor(response: Response) {
		super("Check error.response for the response from the server.")
		this.name = "ResponseError"
		this.message = "Check error.response for the response from the server."
		this.response = response
	}
}

// The CtrClient class to construct the API from
export class GtrClient {
	protected baseUrl = "https://gtr.ukri.org/gtr/api"
	public debug: boolean

	constructor(debug: boolean = false) {
		this.debug = debug
		// Create the get objects methods
		for (const method of getObjectsMethods) {
			//@ts-ignore: Not exactly sure why but it's something about the key value (ts(7053))
			this[method.name] = () => {
				return this.getObjects(method.path)
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

	protected async get(url: string, params: {} = {}): Promise<any> {
		// Add additional search params
		if (Object.keys(params).length !== 0) {
			url += "?" + new URLSearchParams(params).toString()
		}

		if (this.debug) console.log(url)

		return fetch(url, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/vnd.rcuk.gtr.json-v7",
			},
		}).then(async (r) => {
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

	protected async getObjects(path: string): Promise<any> {
		const url = `${this.baseUrl}/${path}`
		return this.get(url)
	}

	protected async getAssociatedObjects(id: string, path: string): Promise<any> {
		let url = `${this.baseUrl}/${path}`
		url = url.replace(":id", id)
		return this.get(url)
	}
}

// Details of the additional methods added programmatically to the GtrClient
export interface GtrClient {
	// getObjects Methods
	//
	getPeople: () => Promise<interfaces.PaginatedPersons>
	getProjects: () => Promise<interfaces.PaginatedProjects>
	getOrganisations: () => Promise<interfaces.PaginatedOrganisations>
	getFunds: () => Promise<interfaces.PaginatedFunds>
	getOutcomes: () => Promise<interfaces.PaginatedOutcomes>
	getKeyFindings: () => Promise<interfaces.PaginatedKeyFindings>
	getImpactSummaries: () => Promise<interfaces.PaginatedImpactSummaries>
	getPublications: () => Promise<interfaces.PaginatedPublications>
	getCollaborations: () => Promise<interfaces.PaginatedCollaborations>
	getIntellectualProperties: () => Promise<interfaces.PaginatedIntellectualProperties>
	getPolicyInfluences: () => Promise<interfaces.PaginatedPolicyInfluences>
	getProducts: () => Promise<interfaces.PaginatedProducts>
	getResearchMaterials: () => Promise<interfaces.PaginatedResearchMaterials>
	getSpinouts: () => Promise<interfaces.PaginatedSpinOuts>
	getFurtherFundings: () => Promise<interfaces.PaginatedFurtherFunding>
	getDisseminations: () => Promise<interfaces.PaginatedDissemination>
	// getObject Methods
	//
	getPerson: (id: string) => Promise<interfaces.Person>
	getOrganisation: (id: string) => Promise<interfaces.Organisation>
	getFund: (id: string) => Promise<interfaces.Fund>
	getKeyFinding: (id: string) => Promise<interfaces.KeyFinding>
	getImpactSummary: (id: string) => Promise<interfaces.ImpactSummary>
	getPublication: (id: string) => Promise<interfaces.Publication>
	getCollaboration: (id: string) => Promise<interfaces.Collaboration>
	getIntellectualProperty: (id: string) => Promise<interfaces.PolicyInfluence>
	getProduct: (id: string) => Promise<interfaces.Product>
	getResearchMaterial: (id: string) => Promise<interfaces.ResearchMaterial>
	getSpinOut: (id: string) => Promise<interfaces.SpinOut>
	getFurtherFunding: (id: string) => Promise<interfaces.FurtherFunding>
	getDissemination: (id: string) => Promise<interfaces.Dissemination>
	// getAssociatedObjects Methods
	//
	getPersonProjects: (id: string) => Promise<interfaces.PaginatedProjects>
	getPersonOrganisations: (id: string) => Promise<interfaces.PaginatedProjects>
	getProjectFunds: (id: string) => Promise<interfaces.PaginatedFunds>
	getProjectOrganisations: (
		id: string
	) => Promise<interfaces.PaginatedOrganisations>
	getProjectPersons: (id: string) => Promise<interfaces.PaginatedPersons>
	getProjectOutcomes: (id: string) => Promise<interfaces.Outcomes>
	getProjectKeyFindings: (
		id: string
	) => Promise<interfaces.PaginatedKeyFindings>
	getProjectImpactSummaries: (
		id: string
	) => Promise<interfaces.PaginatedImpactSummaries>
	getProjectPublications: (
		id: string
	) => Promise<interfaces.PaginatedPublications>
	getProjectCollaborations: (
		id: string
	) => Promise<interfaces.PaginatedCollaborations>
	getProjectIntellectualProperties: (
		id: string
	) => Promise<interfaces.PaginatedIntellectualProperties>
	getProjectProducts: (id: string) => Promise<interfaces.PaginatedProducts>
	getProjectResearchMaterials: (
		id: string
	) => Promise<interfaces.PaginatedResearchMaterials>
	getProjectSpinOuts: (id: string) => Promise<interfaces.PaginatedSpinOuts>
	getProjectDisseminations: (
		id: string
	) => Promise<interfaces.PaginatedDissemination>
}
