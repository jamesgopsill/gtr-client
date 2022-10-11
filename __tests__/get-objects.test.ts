import { GtrClient } from "../src/index.js"
import { getObjectsMethods } from "../src/methods.js"

const client = new GtrClient(false)

// Creating individual tests for each of the object methods.
for (const method of getObjectsMethods) {
	test(`GET ${method.name}`, async () => {
		//@ts-ignore
		const r = await client[method.name]()
		expect(r.ok).toBe(true)
	})
}
