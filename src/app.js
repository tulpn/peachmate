require('dotenv').config()
const helmet = require('helmet')
const express = require("express")


// Load Routes and Controllers
const postsRoutes = require('./routes/posts')
const errorController = require("./controllers/error")


// create Express App
const app = express()

// some security concerns taken care off
app.use(helmet())

// enforce json for every response
app.use((req,res, next) => {
    // all API requests will answer with json format!
    res.setHeader('Content-Type', 'application/json');
    return next()
})

// Define Routes
app.use("/",postsRoutes)

// set the 404 handling routes directly to the controller methods
app.use(errorController.get404)

module.exports = app