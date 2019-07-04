// REQUIRED
const express = require('express')
const app = express()
const port = 3000
var session = require('express-session');

// REQUIRED

// Looking for view Engine in views folder, make sure that u have install ejs
app.set('view engine', 'ejs');
// Looking for view Engine in views folder, make sure that u have install ejs

app.use(session({
    // key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// Parsing data
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Parsing data

// Variable for connect the routes
const router = require('./routers/indexRouter')
// Variable for connect the route

// Load the router module in app, received from variable router
app.use('/', router)
// Load the router module in app, received from variable router

// Connect to the localhost based on port ???
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// Connect to the localhost based on port ???