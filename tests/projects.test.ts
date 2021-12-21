import { GtrClient } from "../src"
import { ResponseError } from "../src/base"

const client = new GtrClient(true)

const projectId = ""

test("GET persons", async () => {
	try {
		const v = await client.getProjects()
		for (const p of v.project) {
			console.log(p.rcukProgrammes)
		}
		expect(typeof v).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
