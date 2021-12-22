import { GtrClient } from "../src"
import { ResponseError } from "../src/base"

const client = new GtrClient(true)

const projectId = "08986A24-6646-4A8B-A571-F92C2A1ADF10"

test("GET projects", async () => {
	try {
		const v = await client.getProjects()
		expect(typeof v).toBe("object")
	} catch (e) {
		console.log(e)
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project by id", async () => {
	try {
		const v = await client.getProject(projectId)
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
		const v = await client.getProjectOrganisations(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project outcomes", async () => {
	try {
		const v = await client.getProjectOutcomes(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project key findings", async () => {
	try {
		const v = await client.getProjectKeyFindings(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project impact summaries", async () => {
	try {
		const v = await client.getProjectImpactSummaries(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project publications", async () => {
	try {
		const v = await client.getProjectPublications(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project collaborations", async () => {
	try {
		const v = await client.getProjectCollaborations(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project intellectural property", async () => {
	try {
		const v = await client.getProjectIntellectualProperties(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project further funding", async () => {
	try {
		const v = await client.getProjectFurtherFunding(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project policy influence", async () => {
	try {
		const v = await client.getProjectPolicyInfluences(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project products", async () => {
	try {
		const v = await client.getProjectProducts(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project research materials", async () => {
	try {
		const v = await client.getProjectResearchMaterials(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project spin outs", async () => {
	try {
		const v = await client.getProjectSpinOuts(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("GET project disseminations", async () => {
	try {
		const v = await client.getProjectDisseminations(projectId)
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
