# Movies with Multi Repo

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to deploy and develop an application whose services live in several repositories.

The [Movies App](https://github.com/okteto/movies-multi-repo) is composed by the following components, each one in its own repository:

- [mongodb](https://github.com/okteto/mongodb): a MongoDB database, deployed with Docker Compose.
- [movies-api](https://github.com/okteto/movies-api): a Node.js API using [Express](https://expressjs.com), deployed with a Helm chart.
- [movies-frontend](https://github.com/okteto/movies-frontend): a React frontend, deployed with a Helm chart.

The `dependencies` section of `okteto.yml` deploys the three repositories: `mongodb` and `movies-frontend` in parallel, and `movies-api` once `mongodb` is deployed, with the connection string that `mongodb` exports. The `deploy` section exposes the application with an Ingress and checks the API.

## Deploy

Deploy the app by cloning this repo and running `okteto deploy`.

Follow the [tutorial](https://www.okteto.com/tutorials/dependencies/) for a step-by-step explanation.
