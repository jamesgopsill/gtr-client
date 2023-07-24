import assert from "node:assert"
import test, { describe } from "node:test"
import { GtrClient } from "../src/index.js"
import { getObjectsMethods } from "../src/methods.js"

const client = new GtrClient(false)

// Creating individual tests for each of the object methods.
describe(`Get Objects`, { concurrency: 2 }, () => {
	for (const method of getObjectsMethods) {
		test(`GET ${method.name}`, async () => {
			//@ts-ignore
			const r = await client[method.name]()
			assert.strictEqual(r.ok, true, r.status)
		})
	}
})

// Creating individual tests for each of the object methods.
describe(`Get Objects with Parameters`, { concurrency: 2 }, () => {
	for (const method of getObjectsMethods) {
		test(`GET ${method.name}`, async () => {
			const query = {
				s: 10,
			}
			//@ts-ignore
			const r = await client[method.name](query)
			assert.strictEqual(r.ok, true, r.status)
		})
	}
})
