import { GtrClient, ResponseError } from "../src"
import { getObjectsMethods } from "../src/methods"

const client = new GtrClient(false)

// Creating individual tests for each of the object methods.
for (const method of getObjectsMethods) {
	test(`GET ${method}`, async () => {
		try {
			//@ts-ignore: because we are programmatically iterating through the methods.
			const res = await client[method.name]()
			expect(typeof res).toBe("object")
		} catch (err) {
			if (err instanceof ResponseError) {
				console.log(err.response.statusText)
			}
			expect(true).toBe(false)
		}
	})
}
