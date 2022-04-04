import { GetOutcomesQuery, GtrClient } from "../src"

const client = new GtrClient(true)

const query: GetOutcomesQuery = {
	query: "experiment",
	pageSize: 10,
}

client
	.getOutcomes(query)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
