import { GtrClient, ResponseError } from "../src"
import { getObjectsMethods } from "../src/methods"

const client = new GtrClient(false)

const testFcnCall = async (fcn: string) => {
	try {
		//@ts-ignore: because we are programmatically iterating through the methods.
		const res = await client[fcn]()
		expect(typeof res).toBe("object")
	} catch (err) {
		if (err instanceof ResponseError) {
			console.log(err.response.statusText)
		}
		expect(true).toBe(false)
	}
}

// Creating individual tests for each of the object methods.
for (const method of getObjectsMethods) {
	test(`GET ${method.name}`, async () => {
		await testFcnCall(method.name)
	})
}
