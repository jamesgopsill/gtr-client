import { GtrClient } from "../src"
import { ResponseError } from "../src/base"

const client = new GtrClient(true)
const keFindingId = "2BDBE8BF-3E95-41BD-903E-ABB9DE3B2C32"
const impactSummaryId = "7FF11B0B-F097-4353-99F4-156190A1EE76"
const publicationId = "E2FBD540-3305-41F0-844B-11621572A999"
const collaborationId = "FD612D18-CE17-44F0-BD5C-64CEA477CCA3"
const intellectualPropertyId = "979F73C2-AF61-40A2-B614-E3C06FB46A70"
const policyInfluenceId = "400963C7-7115-411F-ACEA-01FDF3223F51"
const productId = "76372627-6304-4654-9CD6-970D8D59C3D6"
const researchMaterialId = "6DBCBF1E-BA64-45C2-88B3-20DEADF8EB5D"
const spinOutId = "1CD53236-0D4F-415C-8E15-6EDDD4FF7AD4"
const furtherFundingId = "1287496F-2DA7-449A-8D18-26C743262CFA"
const disseminationId = "72717BD6-E17F-4DAD-9B0D-B80A524D0F18"

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

test("GET intellectual properties", async () => {
	try {
		const v = await client.getIntellectualProperties()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET intellectual property", async () => {
	try {
		const v = await client.getIntellectualProperty(intellectualPropertyId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET policy influences", async () => {
	try {
		const v = await client.getPolicyInfluences()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET policy influence by id", async () => {
	try {
		const v = await client.getPolicyInfluence(policyInfluenceId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET products", async () => {
	try {
		const v = await client.getProducts()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status, e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET product by id", async () => {
	try {
		const v = await client.getProduct(productId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status, e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET research materials", async () => {
	try {
		const v = await client.getResearchMaterials()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status, e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET research materials by id", async () => {
	try {
		const v = await client.getResearchMaterial(researchMaterialId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status, e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET spinouts", async () => {
	try {
		const v = await client.getSpinOuts()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status, e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET spinout by id", async () => {
	try {
		const v = await client.getSpinOut(spinOutId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status, e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET further fundings", async () => {
	try {
		const v = await client.getFurtherFundings()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status, e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET further funding by id", async () => {
	try {
		const v = await client.getFurtherFunding(furtherFundingId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status, e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET disseminations", async () => {
	try {
		const v = await client.getDisseminations()
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status, e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET dissemination by id", async () => {
	try {
		const v = await client.getDissemination(disseminationId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status, e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
