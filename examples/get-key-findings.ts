import {
	KeyFindingsQuery,
	KeyFindingsSearchFields,
	GtrClient,
} from "@jamesgopsill/gtr-client"

const client = new GtrClient(true)

const query: KeyFindingsQuery = {
	query: "behaviour",
	searchFields: [KeyFindingsSearchFields.DESCRIPTION],
	pageSize: 10,
}

const r = await client.getKeyFindings(query)
if (r.ok) console.log(r.data)
