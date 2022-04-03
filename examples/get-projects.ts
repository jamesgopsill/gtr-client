import { GetProjectsQuery, GetProjectsSearchFields, GtrClient } from "../src"

const client = new GtrClient()

const query: GetProjectsQuery = {
	query: "manufacturing",
	searchFields: [GetProjectsSearchFields.RESEARCH_TOPICS],
	pageSize: 10,
}

client
	.getProjects(query)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
