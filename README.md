# A Typescript Client for the UKRI's Gateway to Research API

This client is a fully-typed client for the [UKRI's Gateway to Research API](https://gtr.ukri.org/). It is isomorphic and able to both server (Node.js) and client-side (Browser).

## Contents

- [Getting Started]](#getting-started)
- [Docs](#docs)
- [Contributing](#contributing)
- [Support the Project](#support-the-project)
- [References](#references)

## Getting Started

To install the package, use the following code. I am aiming to put it onto npm soon.

```
yarn add https://github.com/JamesGopsill/gtr-client
```

You can then use in your code via by importing

```typescript
import { GtrClient } from "gtr-client"

// Create a new client.
const client = new GtrClient()

// Retrieve the available funds from the UKRI
try {
	const funds = await client.getFunds()
	console.log(funds)
} catch (e) {
	// Custom response error class
	if (e instanceof ResponseError) {
		console.log(e.response.statusText)
	}
}
```


## Docs

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/gtr-client/).

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

To donate and provide continued support, please go to **[TODO]**.

## References

- [Git AutoCLRF](https://tanutaran.medium.com/solving-git-lf-will-be-replaced-by-crlf-7ca84eb0aad4)
- [API Client Template](https://github.com/ilyamkin/dev-to-js)
- [Git CRLF LF issues](https://stackoverflow.com/questions/170961/whats-the-strategy-for-handling-crlf-carriage-return-line-feed-with-git)