import {
	GetOrganisationsQuery,
	GetOrganisationsSearchFields,
	GtrClient,
} from "../src"

const client = new GtrClient(true)

const query: GetOrganisationsQuery = {
	query: "bristol",
	searchFields: [GetOrganisationsSearchFields.ORGANISATION_NAME],
	pageSize: 10,
}

client
	.getOrganisations(query)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
