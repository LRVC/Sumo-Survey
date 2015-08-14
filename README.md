# Code Challenge

This app grabs a random question for a user to answer and displays metrics for the admin

## Set up

Edit the following code to connect to the appropriate database with the correct dialect
```
//  models/index.js
var sequelize = new Sequelize('dbname', 'username', 'password', {
  host: 'localhost',
  port: 3306,
  dialect: 'postgresql | mysql | sqlite'
});
```

Install dependencies

```bash
npm install
npm start
```
Shut down your server and remove this line, which creates the tables 
```
\\ models/index.js
sqlObj.Question.sync({force: true});

```
Run this command again and the app will be up and running
```bash
npm start
```