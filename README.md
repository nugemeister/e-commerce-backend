# E-Commerce Backend

## Project Explained
The purpose of this project is to create a a backend for an e-commerce site which leverages express and sequelize to interact with a MySQL database.
<br></br>

---

## Success Criteria

### User Stories
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
### Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

```

## Installation

1. Clone down the repository onto your local machine using the `git clone` command.
2. Ensure you have MySQL2 package downloaded locally, as well as sequelize (use `npm install --save sequelize`).
3. Run `npm install` to install necessary packages and dependencies.
4. Run the schema ahead of running the application to ensure you have the starter database created. Log into mysql (use `mysql -u root -p`) then enter the following in your terminal `source db/schema.sql` to create the starter database.
5. From the command line, enter the following to seed your database with the provided starter data `node seeds`.

<br></br>

## Usage
1. Enter the command `node server.js` to initialize the application.
2. Begin running the routes in Insomnia (or a similar tool) to interface with the database.

<br></br>

## Tests
We suggest you run tests for API routes in Insomnia Core or another similar tool.

<br></br>
## Video Demo
> The following videos show the web application's appearance and functionality:

https://user-images.githubusercontent.com/105621758/192189646-99cde980-a841-4194-9a13-eb839e8beffd.mp4

https://user-images.githubusercontent.com/105621758/192189684-6a9a33f8-77be-4bf0-9172-673f9c15182b.mp4

https://user-images.githubusercontent.com/105621758/192189799-2a6687d7-22d8-48eb-9a01-031748a5c64a.mp4

---

[Top of Page](#e-commerce-backend)
