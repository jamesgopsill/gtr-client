import {
	ProjectsQuery,
	ProjectsSearchFields,
	GtrClient,
} from "@jamesgopsill/gtr-client"

const client = new GtrClient()

const query: ProjectsQuery = {
	query: "manufacturing",
	searchFields: [ProjectsSearchFields.RESEARCH_TOPICS],
	pageSize: 10,
}

const r = await client.getProjects(query)
if (r.ok) console.log(r.data)
