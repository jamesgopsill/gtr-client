import { GtrClient, ResponseError } from "../src"
import { getObjectsMethods } from "../src/methods"

const client = new GtrClient(true)

const testFcnCallWithParams = async (fcn: string) => {
	try {
		//@ts-ignore: because we are programmatically iterating through the methods.
		const res = await client[fcn]({
			s: 10,
		})
		expect(typeof res).toBe("object")
	} catch (err) {
		if (err instanceof ResponseError) {
			console.log(err.response.status)
			console.log(err.response.statusText)
			console.log(await err.response.json())
		}
		expect(true).toBe(false)
	}
}

// Creating individual tests for each of the object methods.
for (const method of getObjectsMethods) {
	test(`GET ${method.name}`, async () => {
		await testFcnCallWithParams(method.name)
	})
	break
}
