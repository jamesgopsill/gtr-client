import {
	PeopleQuery,
	PeopleSearchFields,
	GtrClient,
} from "@jamesgopsill/gtr-client"

const client = new GtrClient()

const query: PeopleQuery = {
	query: "Bob",
	searchFields: [PeopleSearchFields.FIRST_NAME_FAMILY_NAME],
	pageSize: 10,
}

const r = await client.getPeople(query)
if (r.ok) console.log(r.data)
