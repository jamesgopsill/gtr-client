import { GtrClient, ResponseError } from "../src"
import { getObjectsMethods } from "../src/methods"

const client = new GtrClient(true)

test("GET objects", async () => {
	try {
		for (const method of getObjectsMethods) {
			//@ts-ignore: because we are programmatically iterating through the methods.
			const v = await client[method.name]()
			expect(typeof v).toBe("object")
		}
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
