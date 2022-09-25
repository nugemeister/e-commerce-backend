# E-Commerce Backend

## Project Explained
The purpose of this project is to create a a backend for an e-commerce site which leverages express and sequelize to interact with a MySQL database.
<br></br>
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
4. Enter the command `node index.js` to initialize the application, proceed by answering the following prompts.

<br></br>

## Tests
We suggest you run tests for API routes in Insomnia Core or another similar tool.

<br></br>
## Video Demo

The following video shows the web application's appearance and functionality:

![This is a recording of the live webpage.](./assets/employee-tracker-demo-video.mp4)
<br></br>

## Provided Mock-Up for Reference

The following image was provided as a directional mock-up for reference.

![This is a screenshot of the first provided mock-up for reference.](./assets/13-orm-homework-demo-01.gif)
![This is a screenshot of the second provided mock-up for reference.](./assets/13-orm-homework-demo-02.gif)
![This is a screenshot of the third provided mock-up for reference.](./assets/13-orm-homework-demo-03.gif)
<br></br>

