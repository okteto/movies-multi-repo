# Movies with Multi Repo

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop the Movies App in Okteto.

The [Movies App](https://github.com/okteto/movies-multi-repo) is composed by the following components:

- A very simple Node.js API using [Express](https://expressjs.com). Deployed using a [Helm Chart](https://github.com/okteto/movies-api/tree/master/chart).
- A [MongoDB](https://www.mongodb.com) database (version 8.0). Deployed using the [cloudpirates-mongodb](https://artifacthub.io/packages/helm/cloudpirates-mongodb/mongodb) Helm chart with official MongoDB 8.0 Docker images from [Docker Hub](https://hub.docker.com/_/mongo).
- A frontend in React, defined in a different [Github Repository]((https://github.com/okteto/movies-frontend)).

## Deploy

Deploy the app by cloning this repo and running `okteto deploy`.
