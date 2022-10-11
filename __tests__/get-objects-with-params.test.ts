import { GtrClient } from "../src/index.js"
import { getObjectsMethods } from "../src/methods.js"

const client = new GtrClient(false)

// Creating individual tests for each of the object methods.
for (const method of getObjectsMethods) {
	test(`GET ${method.name}`, async () => {
		const query = {
			s: 10,
		}
		//@ts-ignore
		const r = await client[method.name](query)
		expect(r.ok).toBe(true)
	})
}
