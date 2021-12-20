import { GtrClient } from "../src"
import { ResponseError } from "../src/base"

const client = new GtrClient(true)

const organisationID = "4A348A76-B2D0-4DDD-804A-CE735A6D3798"
const projectID = "5B19AFBB-23AF-45E3-B23F-1993895CEE6F"
const personID = "B124BCD5-21F4-476C-8CCC-E21681AEB5C7"

test("GET organisations", async () => {
	try {
		const v = await client.getOrganisations()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET organisations", async () => {
	try {
		const v = await client.getOrganisation(organisationID)
		console.log(v.addresses.address)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project organisations", async () => {
	try {
		const v = await client.getProjectOrganisations(projectID)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET person organisations", async () => {
	try {
		const v = await client.getPersonOrganisations(personID)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
