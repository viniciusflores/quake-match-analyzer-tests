# Quake Match Analyzer Tests

### Requirements

[Git](https://git-scm.com/)

[Node](https://nodejs.org/en/) v14

[Yarn](https://yarnpkg.com/)

> If you want to see the report, you will also need [Java 8](https://www.oracle.com/java/technologies/downloads/#java8) or higher. This is a prerequisite of allure reports.

> Consider use [NVM](https://github.com/nvm-sh/nvm) to configure and set you Node version.

### Features

[Mocha](https://mochajs.org/) framework to execute and describe your tests;

[Chai](https://www.chaijs.com/) assertion library;

[Husky](https://typicode.github.io/husky/)

[DotEnv-Flow](https://www.npmjs.com/package/dotenv-flow) Thinking to validate more than one environment of the test, we have the dotenv-flow to divide the specific variables for environments as soon as necessary.

## Prerequisites v2

This test project was based on validating the endpoints of an existing API.

Before running the automated tests project, you need to run the API in your machine in port 8080.

The best way, is running the docker-compose this project.

#### Requirements

[Docker-compose](https://docs.docker.com/compose/)

#### Running the prerequisites

Clone the project and run by docker-compose

```sh
docker-compose up

```

## Getting Started

> ‼️ **To start developmentt**: Consider to use [vscode](https://code.visualstudio.com/download) as editor to development. In this project is configured the integration to automatic auto-fix code in vscode as configured at eslint! Also, remember that is necessary your vscode has an Eslint plugin installed.

Clone project:

```git
git clone <git@github.com:viniciusflores/quake-match-analyzer-tests.git>
```

Install dependencies

```js
yarn
```

Run all tests

```js
yarn test
```

## Reports

### Allure

Run this command to generate the allure report in the directory `./allure-results`:

```js
yarn report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```js
yarn report:open
```

To clear or reset reports, run the follow command

```js
yarn clean
```
