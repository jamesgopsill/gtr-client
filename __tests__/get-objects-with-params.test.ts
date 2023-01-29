import { GtrClient } from "../src/index"
import { getObjectsMethods } from "../src/methods"

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
