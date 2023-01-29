const gtr = require("@jamesgopsill/gtr-client")

const performQuery = async () => {
	const client = new gtr.GtrClient(true)

	const query = {
		query: "epsrc",
		searchFields: [gtr.FundsSearchFields.FUNDER_ORGANISATION_NAME],
		pageSize: 10,
	}

	const r = await client.getFunds(query)
	if (r.ok) {
		console.log(r.data)
	} else {
		console.log(r.data)
	}
}

performQuery()
