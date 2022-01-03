import { fetch } from "cross-fetch"
import {
	GtrAssociatedObjects,
	GtrAssociatedObjectsFiltersType,
	GtrAssociatedObjectsResponseType,
	GtrObject,
	GtrObjectResponseType,
	GtrObjects,
	GtrObjectsFiltersType,
	GtrObjectsResponseType,
} from "."

export * from "./generic.interfaces"
export * from "./get-associated-objects.interfaces"
export * from "./get-object.interfaces"
export * from "./get-objects.interfaces"

/**
 * ResponseError to retun any response errors to the user.
 */
export class ResponseError extends Error {
	public response: Response

	constructor(response: Response) {
		super("Check error.response for the response from the server.")
		this.name = "ResponseError"
		this.message = "Check error.response for the response from the server."
		this.response = response
	}
}

/**
 * The GtrClient.
 */
export class GtrClient {
	protected baseUrl = "https://gtr.ukri.org/gtr/api"
	public debug: boolean

	constructor(debug: boolean = false) {
		this.debug = debug
	}

	/**
	 * An internal get request function.
	 * @param url The URL for the get request.
	 * @param params The parameters to be sent along with the get request.
	 */
	protected async get<Type>(url: string, params: {} = {}): Promise<Type> {
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

	/**
	 *
	 * @param request Getting an object from the GtR API. Use the GetObject interface to identify the object you wish to retrieve. The function will dynamically update with the expected response type from the get call.
	 * @param id
	 * @returns
	 */
	public async getObject<T extends GtrObject>(
		request: T,
		id: string
	): Promise<GtrObjectResponseType<T>> {
		const url = `${this.baseUrl}/${request}/${id}`
		return this.get<GtrObjectResponseType<T>>(url)
	}

	public async getObjects<T extends GtrObjects>(
		request: T,
		filters?: GtrObjectsFiltersType<T>
	): Promise<GtrObjectsResponseType<T>> {
		const url = `${this.baseUrl}/${request}`
		return this.get<GtrObjectsResponseType<T>>(url, filters)
	}

	public async getAssociatedObjects<T extends GtrAssociatedObjects>(
		request: T,
		id: string,
		filters?: GtrAssociatedObjectsFiltersType<T>
	): Promise<GtrAssociatedObjectsResponseType<T>> {
		let url = `${this.baseUrl}/${request}`
		url = url.replace("_", id)
		return this.get<GtrAssociatedObjectsResponseType<T>>(url, filters)
	}

	/**
	 * This function recrusively scans through an object to detect numeric dates and converts them to Date objects for the end-user to handle.
	 * @param obj The response json object to recursively scan through.
	 */
	protected recursiveProcessObjectDates(obj: any) {
		Object.keys(obj).forEach((key) => {
			// console.log(key, typeof obj[key], Array.isArray(obj[key]))
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
}
