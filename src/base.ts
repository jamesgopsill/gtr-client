import { fetch } from "cross-fetch"
import { Links } from "./generic.interfaces"

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
 * The base class to build the API client from
 */
export abstract class Base {
	protected baseURL = "https://gtr.ukri.org/gtr/api"
	public debug: boolean

	constructor(debug: boolean = false) {
		this.debug = debug
	}

	/**
	 * An internal get request function
	 */
	protected async get<Type>(url: string, params: {} = {}): Promise<Type> {
		if (Object.keys(params).length !== 0) {
			url += "?" + (new URLSearchParams(params)).toString()
		}

		if (this.debug) console.log(url)
		
		return fetch(url, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/vnd.rcuk.gtr.json-v7",
			},
		}).then((r) => {
			if (r.ok) {
				return r.json()
			}
			throw new ResponseError(r)
		})
	}

	protected processLinksDates(links: Links) {
		for (const l of links.link) {
			l.start = new Date(l.start)
			l.end = new Date(l.end)
		}
	}
}
