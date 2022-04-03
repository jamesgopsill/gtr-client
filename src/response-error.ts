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
