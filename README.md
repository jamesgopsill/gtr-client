# A TS client for the GtR API

![GitHub package.json version](https://img.shields.io/github/package-json/v/JamesGopsill/gtr-client)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/JamesGopsill/gtr-client/client-tests?label=client-tests&logo=github&style=flat)
![GitHub repo size](https://img.shields.io/github/repo-size/JamesGopsill/gtr-client)
![GitHub](https://img.shields.io/github/license/JamesGopsill/gtr-client)

![GitHub package.json dynamic](https://img.shields.io/github/package-json/description/JamesGopsill/gtr-client)

![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/JamesGopsill/gtr-client)

This client is a fully-typed [typescript](https://www.typescriptlang.org/) client for the [UKRI's Gateway to Research GtR-2 API](https://gtr.ukri.org/). It runs both on server (Node.js) and client-side (Browser) javascript.

## Contents

- [Getting Started](#getting-started)
- [Docs](#docs)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support the Project](#support-the-project)
- [References](#references)

## Getting Started

To install the package, use the following code (npm, pnpm or yarn).

```
pnpm install @jamesgopsill/gtr-client
```

You can then use in your code via by importing

```typescript
import { GtrClient, ProjectsQuery, ProjectsSearchFields } from "@jamesgopsill/gtr-client"

const client = new GtrClient()

const query: ProjectsQuery = {
	query: "manufacturing",
	searchFields: [GetProjectsSearchFields.RESEARCH_TOPICS],
	pageSize: 10
}

const r = await client.getProjects(query)
if (r.ok) console.log(r.data)
```

## Docs

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/gtr-client/).

## Roadmap

| Version | Content | Status |
| --- | --- | --- |
| 0.0.1 | Repo up and running | ✔ |
| 0.2.0 | `/funds` implemented. | ✔ |
| 0.3.0 | `/organisations` implemented. | ✔ |
| 0.4.0 | `/outcomes` implemented. | ✔ |
| 0.5.0 | `/persons` implemented. | ✔ |
| 0.6.0 | `/projects` implemented. | ✔ |
| 0.7.0 | Simplified client using interface conditionals. | ✔ |
| 0.8.0 | Refactored again to use programmatically defined functions. | ✔ |
| 0.9.0 | Custom Filtering Param Interfaces | ✔ |
| 0.11.0 | Changing how the response is handled. | ✔ |
| 1.0.0 | Spec complete. | ✔ |

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project. Please use `pnpm pre-add` before committing to the repository.

Note. if wanting to run the examples as you develop the repo. Use `pnpm link .` to link the repo to your available packages.

## Support the Project

If you like this project, please consider sponsoring the developers so they can continue to maintain and improve the package.

## References

- [UKRI Gateway to Research](https://gtr.ukri.org/)
- [Git AutoCLRF](https://tanutaran.medium.com/solving-git-lf-will-be-replaced-by-crlf-7ca84eb0aad4)
- [API Client Template](https://github.com/ilyamkin/dev-to-js)
- [Git CRLF LF issues](https://stackoverflow.com/questions/170961/whats-the-strategy-for-handling-crlf-carriage-return-line-feed-with-git)
- [CLRF LF issue](https://stackoverflow.com/questions/5834014/lf-will-be-replaced-by-crlf-in-git-what-is-that-and-is-it-important)