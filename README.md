# React-project
 
## Description 

 React-project Recipes is a single page application (SPA) that let you share your favourites recipes with other users.
 
 ## Build with
 
  * [React](https://reactjs.org/) -A JavaScript library for building user interfaces
  * [MongoDb](https://mongodb.com) - MongoDB is a document database, which means it stores data in JSON-like documents.
  * [mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js.
  * [ExpressJS](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework.
  * [NodeJS](https://nodejs.org/en/) - Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.

## How to set up the project?

   1. First you have to start MongoD typing `mongod` in terminal. 
   If ypu don\`t have it, please install it [MongoDb](https://mongodb.com) .
   2. Write `npm install` in terminal for both directories - _client-side_ and _REST API_. 
   
   ###### bcrypt
   If you hit a problem with bcrypt while installing dependencies, try `npm install bcrypt@3.0.6`.
   
   3. In  _client-side_ write `npm start` in terminal. It will run the project at http://localhost:3000 .
   4. in _REST API_ directory write `node index` in terminal. It will run the server at http://localhost:9999 .
   
## Features
  * Anonymouse users
      * Login/Register
      * View home page
  
  * Logged in users
      * View all recipes
      * View details page for the recipe
      * Create new recipe
      * Edit recipe
      * Delete recipe
      
  * Contact page with google maps 
  * Snow effect, wich can be turn on and off with button in navbar
 
 ## License
 [MIT License](https://github.com/MargaritaVacheva/React-project/blob/master/LICENSE)


