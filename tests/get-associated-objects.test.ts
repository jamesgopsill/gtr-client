import { GtrAssociatedObjects, GtrClient, ResponseError } from "../src"

const client = new GtrClient(true)

const personId = "B124BCD5-21F4-476C-8CCC-E21681AEB5C7"
const projectId = "08986A24-6646-4A8B-A571-F92C2A1ADF10"

const requests = [
	{
		type: GtrAssociatedObjects.PERSON_ORGANISATIONS,
		id: personId,
	},
	{
		type: GtrAssociatedObjects.PERSON_PROJECTS,
		id: personId,
	},
	{
		type: GtrAssociatedObjects.PROJECT_ORGANISATIONS,
		id: projectId,
	},
]

test("GET organisations associated with a person", async () => {
	try {
		for (const request of requests) {
			const v = await client.getAssociatedObjects(request.type, request.id)
			// console.log(v)
			expect(typeof v).toBe("object")
		}
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
