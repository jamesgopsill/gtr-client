import { GetFundsQuery, GetFundsSearchFields, GtrClient } from "../src"

const client = new GtrClient(true)

const query: GetFundsQuery = {
	query: "epsrc",
	searchFields: [GetFundsSearchFields.FUNDER_ORGANISATION_NAME],
	pageSize: 10,
}

client
	.getFunds(query)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
