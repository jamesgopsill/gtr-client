import { Links, Paginated } from ".."

export interface PaginatedProjects extends Paginated {
	project: Project[]
}

export interface Project {
	links: Links
	id: string
	href: string
	created: Date
	identifiers: {
		identifier: [
			{
				value: string
				type: string
			}
		]
	}
	title: string
	status: string
	grantCategory: string
	leadFunder: string
	leadOrganisationDepartment: string
	abstractText: string
	healthCategories: {
		healthCategory: [
			{
				id: string
				text: string
			}
		]
	}
	researchActivities: {
		researchActivity: any[]
	}
	researchSubjects: {
		researchSubject: [
			{
				id: string
				text: string
				percentage: number
			}
		]
	}
	researchTopics: {
		researchTopic: [
			{
				id: string
				text: string
			}
		]
	}
	rcukProgrammes: {
		rcukProgramme: any[]
	}
}
