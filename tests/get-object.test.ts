import { GtrClient, GtrObject, ResponseError } from "../src"

const client = new GtrClient(true)

const getRequests = [
	{
		request: GtrObject.PERSON,
		id: "B124BCD5-21F4-476C-8CCC-E21681AEB5C7",
	},
	{
		request: GtrObject.PROJECT,
		id: "08986A24-6646-4A8B-A571-F92C2A1ADF10",
	},
	{
		request: GtrObject.ORGANISATION,
		id: "4A348A76-B2D0-4DDD-804A-CE735A6D3798",
	},
	{
		request: GtrObject.FUND,
		id: "FC5616AA-496E-4888-935E-A1917F24CED5",
	},
	{
		request: GtrObject.KEYFINDING,
		id: "2BDBE8BF-3E95-41BD-903E-ABB9DE3B2C32",
	},
	{
		request: GtrObject.IMPACTSUMMARY,
		id: "7FF11B0B-F097-4353-99F4-156190A1EE76",
	},
	{
		request: GtrObject.PUBLICATION,
		id: "E2FBD540-3305-41F0-844B-11621572A999",
	},
	{
		request: GtrObject.COLLABORATION,
		id: "FD612D18-CE17-44F0-BD5C-64CEA477CCA3",
	},
	{
		request: GtrObject.INTELLECTUAL_PROPERTY,
		id: "979F73C2-AF61-40A2-B614-E3C06FB46A70",
	},
	{
		request: GtrObject.POLICY_INFLUENCE,
		id: "400963C7-7115-411F-ACEA-01FDF3223F51",
	},
	{
		request: GtrObject.PRODUCT,
		id: "76372627-6304-4654-9CD6-970D8D59C3D6",
	},
	{
		request: GtrObject.RESEARCH_MATERIAL,
		id: "6DBCBF1E-BA64-45C2-88B3-20DEADF8EB5D",
	},
	{
		request: GtrObject.SPIN_OUT,
		id: "1CD53236-0D4F-415C-8E15-6EDDD4FF7AD4",
	},
	{
		request: GtrObject.FURTHER_FUNDING,
		id: "1287496F-2DA7-449A-8D18-26C743262CFA",
	},
	{
		request: GtrObject.DISSEMINATION,
		id: "72717BD6-E17F-4DAD-9B0D-B80A524D0F18",
	},
]

test("GET object", async () => {
	try {
		for (const gR of getRequests) {
			const v = await client.getObject(gR.request, gR.id)
			expect(typeof v).toBe("object")
		}
		/*
		const v = await client.getObject(GtrObject.PERSON, personId)
		expect(typeof v).toBe("object")
		*/
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
