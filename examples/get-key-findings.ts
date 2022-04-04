import {
	GetKeyFindingsQuery,
	GetKeyFindingsSearchFields,
	GtrClient,
} from "../src"

const client = new GtrClient(true)

const query: GetKeyFindingsQuery = {
	query: "behaviour",
	searchFields: [GetKeyFindingsSearchFields.DESCRIPTION],
	pageSize: 10,
}

client
	.getKeyFindings(query)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
