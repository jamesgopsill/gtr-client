import { GetPeopleQuery, GetPeopleSearchFields, GtrClient } from "../src"

const client = new GtrClient()

const query: GetPeopleQuery = {
	query: "Bob",
	searchFields: [GetPeopleSearchFields.FIRST_NAME_FAMILY_NAME],
	pageSize: 10,
}

client
	.getPeople(query)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
