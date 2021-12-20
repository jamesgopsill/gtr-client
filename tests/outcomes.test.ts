import { GtrClient } from "../src"
import { ResponseError } from "../src/base"

const client = new GtrClient(true)
const keFindingId = "2BDBE8BF-3E95-41BD-903E-ABB9DE3B2C32"
const impactSummaryId = "7FF11B0B-F097-4353-99F4-156190A1EE76"
const publicationId = "E2FBD540-3305-41F0-844B-11621572A999"
const collaborationId = "FD612D18-CE17-44F0-BD5C-64CEA477CCA3"

test("GET outcomes", async () => {
	try {
		const v = await client.getOutcomes()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET key findings", async () => {
	try {
		const v = await client.getKeyFindings()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET key finding by id", async () => {
	try {
		const v = await client.getKeyFinding(keFindingId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET impact summaries", async () => {
	try {
		const v = await client.getImpactSummaries()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET impact summary by id", async () => {
	try {
		const v = await client.getImpactSummary(impactSummaryId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET publications", async () => {
	try {
		const v = await client.getPublications()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET publication by id", async () => {
	try {
		const v = await client.getPublication(publicationId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET collaborations", async () => {
	try {
		const v = await client.getCollaborations()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET collaboration by id", async () => {
	try {
		const v = await client.getCollaboration(collaborationId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
