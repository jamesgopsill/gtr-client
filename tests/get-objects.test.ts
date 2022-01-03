import { GtrClient, GtrObjects, ResponseError } from "../src"

const client = new GtrClient(true)

const requests = [
	GtrObjects.PEOPLE,
	GtrObjects.PROJECTS,
	GtrObjects.ORGANISATIONS,
	GtrObjects.FUNDS,
]

test("GET objects", async () => {
	try {
		for (const request of requests) {
			const v = await client.getObjects(request)
			expect(typeof v).toBe("object")
		}
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
