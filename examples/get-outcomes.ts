import { OutcomesQuery, GtrClient } from "@jamesgopsill/gtr-client"

const client = new GtrClient(true)

const query: OutcomesQuery = {
	query: "experiment",
	pageSize: 10,
}

const r = await client.getOutcomes(query)
if (r.ok) console.log(r.data)
