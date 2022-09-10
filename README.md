# Inventory Buddy

Access inventory anytime on web, tablet or mobile. Inventory Buddy is a robust and light-weight inventory management application designed to help businesses maintain perfect control over every unit of stock.

**Link to project:**
https://inventory-buddy.herokuapp.com/

<img src='https://brynnsmith.com/images/InventoryBuddy.jpg' alt='image of AI figure infront of inventory mangement software'>

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express, MongoDB

This project was created with an MVC (Model-View-Controller) architecture outline. We utilized mongoose to assist in creating schemas for our models and ejs to handle our views. Everything is ran from the server.js file in the root directory, with it calling the appropriate resources needed by utilizing our routes. Passport.js is handling the authentication for user sign-up and login.

## Lessons Learned:

While building this app, I learned a lot about MVC architecture - specifically in regards to routes and schemas. Having the code encapsulated and abstracted made it clearer and simpler to work with. Building in a group allowed us to collaborate on ideas, come up with creative solutions to problems and share a wealth of knowledge and resources. When the inevitable bugs came up, we worked together to solve them with each member bringing their unique experiences and expertise to the table. - Brynn

## Optimizations

There are a lot of extra features to build out in the app including the ability to upload photos for each inventory item, sorting of lists, adding tags and types to items, user profiles, etc.

## Contributors

Brynn Smith : <a href="https://github.com/brynnsmith">Github</a> - <a href="https://twitter.com/BrynnSm1th">Twitter</a> - <a href="https://www.linkedin.com/in/brynnasmith/">LinkedIn</a><br>
Ming Lee Ng : <a href="https://github.com/redconOne">Github</a> - <a href="https://twitter.com/MingLeeNg1">Twitter</a> - <a href="https://www.linkedin.com/in/mingleeng/">LinkedIn</a><br>
Vu Huynh : <a href="https://github.com/vu5381">Github</a> - <a href="https://twitter.com/vuhuynh91609962">Twitter</a> - <a href="https://www.linkedin.com/in/vu-huynh-duy">LinkedIn</a><br>
Jason Parker: <a href="https://github.com/jparrker/">Github</a> - <a href="https://twitter.com/jasonkkparker">Twitter</a> - <a href="https://www.linkedin.com/in/jsonparker/">LinkedIn</a><br>
Kathryn Johnson: <a href="https://github.com/kathryncodes">Github</a> - <a href="https://twitter.com/kathryn_codes">Twitter</a> - <a href="https://www.linkedin.com/in/kathryncodes">LinkedIn</a><br>
Ryan Lowe: <a href="https://github.com/BlipOnNobodysRadar">Github</a> - <a href="https://twitter.com/Ryan_CodeBlip">Twitter</a> - <a href="https://www.linkedin.com/in/ryan-lowe-codeblip/">LinkedIn</a><br><br>

## Packages/Dependencies used

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

### Things to add for local build

- Create a `.env` file and add the following as `key: value`
- PORT: 8000 (can be any port example: 3000)
- DB_STRING: `your database URI`
