import { GtrClient } from "../src"
import { ResponseError } from "../src/base"

const client = new GtrClient(true)

const organisationID = "4A348A76-B2D0-4DDD-804A-CE735A6D3798"
const fundID = "5B19AFBB-23AF-45E3-B23F-1993895CEE6F"

test("GET funds", async () => {
	try {
		const v = await client.getFunds()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET funds (with params)", async () => {
	try {
		const v = await client.getFunds({
			p: 2,
			so: "A",
		})
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project funds", async () => {
	try {
		const v = await client.getProjectFunds(fundID)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET organisation funds", async () => {
	try {
		const v = await client.getOrganisationFunds(organisationID)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
