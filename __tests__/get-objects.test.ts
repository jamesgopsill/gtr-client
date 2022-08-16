import { GtrClient } from "../src"
import { getObjectsMethods } from "../src/methods"

const client = new GtrClient(false)

// Creating individual tests for each of the object methods.
for (const method of getObjectsMethods) {
	test(`GET ${method.name}`, async () => {
		//@ts-ignore
		const r = await client[method.name]()
		expect(r.ok).toBe(true)
	})
}
