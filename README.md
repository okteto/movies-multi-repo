# Movies with Multi Repo

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop the Movies App in Okteto.

The [Movies App](https://github.com/okteto/movies-multi-repo) is composed by the following components:

- A very simple Node.js API using [Express](https://expressjs.com). Deployed using a [Helm Chart](https://github.com/okteto/movies-api/tree/master/chart).
- A [MongoDB](https://www.mongodb.com) database (version 8.0). Deployed using official MongoDB Docker images with Kubernetes StatefulSet for production-ready persistence and high availability.
- A frontend in React, defined in a different [Github Repository]((https://github.com/okteto/movies-frontend)).

## Deploy

Deploy the app by cloning this repo and running `okteto deploy`.

## Modernization Updates

This application has been modernized with the following improvements:

- **Updated MongoDB**: Upgraded from Bitnami MongoDB 6.0.5 to official MongoDB 8.0 Docker images
- **Enhanced Security**: Replaced third-party Bitnami images with official MongoDB images from Docker Hub
- **Production-Ready Deployment**: Uses Kubernetes StatefulSet with persistent volumes for data durability
- **Resource Management**: Configured appropriate CPU and memory limits for optimal performance
- **Health Checks**: Implemented liveness and readiness probes for better reliability
- **Simplified Architecture**: Removed dependency on external Helm repositories for easier maintenance
