import { GtrClient, FundsSearchFields } from "@jamesgopsill/gtr-client"

const client = new GtrClient(true)

const query = {
	query: "epsrc",
	searchFields: [FundsSearchFields.FUNDER_ORGANISATION_NAME],
	pageSize: 10,
}

const r = await client.getFunds(query)
if (r.ok) console.log(r.data)
