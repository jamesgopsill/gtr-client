import { GtrClient } from "../src"
import { ResponseError } from "../src/base"

const client = new GtrClient(true)

const organisationID = "4A348A76-B2D0-4DDD-804A-CE735A6D3798"

test("GET organisations", async () => {
	try {
		const v = await client.getOrganisations()
		console.log(v.organisation[0])
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET organisation by id", async () => {
	try {
		const v = await client.getOrganisation(organisationID)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET organisation by id projects", async () => {
	try {
		const v = await client.getOrganisationsProjects(organisationID)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET organisation by id persons", async () => {
	try {
		const v = await client.getOrganisationsPersons(organisationID)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
