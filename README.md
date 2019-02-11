# Fullstack Javascript Boilerplate

## About

Frontend
  * Next.js React - Server Side Rendered React
  * Apollo Boost - Mutations / Queries / State Management

Backend
  * GraphQL Yoga Server - Express Server
  * Prisma DB - PostgreSQL Relational Database

This boiler plate is meant to get you up and running quickly for a fullstack React application.  Routes should be created in pages section, while components are built up in the appropriately named folder.  Make sure that you have the frontend and backend folders installed and that you have both sides running before working.


## Installation

### Install Dependencies

Make sure you have [Node.js](http://nodejs.org/), [Prisma](https://prisma.io), and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

Download and install dependencies.

```sh
git clone git@github.com:theranbrig/React-GraphQL-Fullstack-Boilerplate.git # or clone your own fork
cd React-GraphQL-Fullstack-Boilerplate
<!-- Be sure to install dependencies in both frontend and backend folders -->
cd frontend
npm install
cd backend
npm install
```

### Prisma Setup

Make sure that you connect your app to a database first. This one is connected to a Prisma test database, but you can connect it to your own SQL database by following the directions at [Prisma](https://prisma.io).  Below is a guide to set up your own Prisma Database.

### Backend

Make sure you are working in the backend folder of the `grown` project.

```sh
cd backend
```

First you need to install the Prisma CLI.

```sh
npm install -g prisma
```

After that you may need to login which can be done by using:

```sh
prisma login
```

Next you need to initialize the database by using.

```sh
prisma init
```

Follow the prompts as they are given. I recommend using the `Demo Server` to test, but you may use any other DB that you want.  Follow through with the rest of the steps by naming it and giving it the stage `dev`.  You may also get a prompt asking for the Programming Language.  For that you may set it to `Don't Generate`.

Your Prisma server should be set up.  You now need to change the files a bit to work with our project.

**Optional** - You may also delete the `datamodel.prisma` file that was created, as our data model will be built using the `datamodel.graphql`.

In the root directory of the `backend` folder be sure that you create and set up your own `variables.env` file with the following information:

```sh

cd backend
touch `variables.env`

```

Fill in the `variables.env` file with your own information.  The `PRISMA_ENDPOINT` is found in the `prisma.yml` file.

```env
FRONTEND_URL="http://localhost:7777"
PRISMA_ENDPOINT="YOUR PRISMA ENDPOINT HERE FROM PRISMA.YML FILE THAT WAS CREATED"
PRISMA_SECRET="MAKEUPYOUROWNSECRET"
PORT=4444
STRIPE_SECRET="PRIVATEKEYNEEDEDFORDEPLOY"
```

In the `prisma.yml` file be sure to include the following data.

```yml
# DEVELOPMENT ENDPOINT - PUT IN VARIABLES.ENV - UNCOMMENT FOR DEVELOPMENT / COMMENT OUT FOR PRODUCTION

endpoint: ${env:PRISMA_ENDPOINT}

# PRODUCTION ENDPOINT - USE YOUR OWN - UNCOMMENT OR REWRITE FOR PRODUCTION
#endpoint: YOUR OWN END POINT

datamodel: datamodel.graphql
secret: ${env:PRISMA_SECRET}
hooks:
  post-deploy:
    - graphql get-schema -p prisma
```

Finally, you can run the following to deploy the datamodel to the database at any time:

```sh
npm run deploy
```

Once the prisma database is set up you may run the development server with:

```sh
npm run dev
```

Your backend should now be running on [localhost:4444](http://localhost:4444/).

### Frontend

Make sure your dependencies are installed in the `frontend` folder.  You may then use:

```sh
npm run dev
```

Your app should now be visible on [localhost:7777](http://localhost:7777/).

Make sure you are running both the `frontend` and `backend` folders.

**Adapted from Wes Bos Advanced React Course**
