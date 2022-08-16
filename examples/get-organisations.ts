import {
	OrganisationsQuery,
	OrganisationsSearchFields,
	GtrClient,
} from "@jamesgopsill/gtr-client"

const client = new GtrClient(true)

const query: OrganisationsQuery = {
	query: "bristol",
	searchFields: [OrganisationsSearchFields.ORGANISATION_NAME],
	pageSize: 10,
}

const r = await client.getOrganisations(query)
if (r.ok) console.log(r.data)
