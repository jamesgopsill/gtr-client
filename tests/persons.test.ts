import { GtrClient } from "../src"
import { ResponseError } from "../src/base"

const client = new GtrClient(true)

const personId = "B124BCD5-21F4-476C-8CCC-E21681AEB5C7"

test("GET persons", async () => {
	try {
		const v = await client.getPersons()
		console.log(v.person)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET person by id", async () => {
	try {
		const v = await client.getPerson(personId)
		console.log(v)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET person by id organisations", async () => {
	try {
		const v = await client.getPersonOrganisations(personId)
		console.log(v)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
