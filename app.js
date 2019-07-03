// REQUIRED
const express = require('express')
const app = express()
const port = 3000

// REQUIRED

// Looking for view Engine in views folder, make sure that u have install ejs
app.set('view engine', 'ejs');
// Looking for view Engine in views folder, make sure that u have install ejs

// Parsing data
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Parsing data

// Variable for connect the routes
const router = require('./routers/indexRouter')
// Variable for connect the route
const companyRouter = require('./routers/companyRouter');
const pelamarRouter = require('./routers/pelamarRouter')
// Load the router module in app, received from variable router
app.use('/', router)
app.use('/company', companyRouter)
app.use('/pelamar', pelamarRouter)
// Load the router module in app, received from variable router

// Connect to the localhost based on port ???
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// Connect to the localhost based on port ???