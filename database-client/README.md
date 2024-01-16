# database-client

## Running the Ceramic integration tests locally

> Start up the Ceramic daemon by running the following command

```bash
yarn start-ceramic-daemon
```

> Run the integration tests

```bash
yarn start-integration-tests
```

**Note:** Use the `CERAMIC_CLIENT_URL` env variable (like `export CERAMIC_CLIENT_URL=http://127.0.0.1:7007`) to change the ceramic client URL for the integration tests if required.

## Running the Ceramic integration tests in Docker

IMPORTANT this will overwrite your `schemas/scripts/create-model.json` and `schemas/scripts/publish-model.json` files! Make a backup of these files!

```bash
docker-compose up -d --force-recreate
```

Tests are flaky the first time, possibly due to connection issues with the Ceramic node. If tests fail due to an error like `request to http://localhost:7007/api/v0/streams failed, reason: connect ECONNREFUSED 127.0.0.1:7007`, try running `docker-compose up -d` again to re-run the tests.
