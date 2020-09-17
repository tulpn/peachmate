require('dotenv').config()
const helmet = require('helmet')
const express = require("express")
require("./services/mongodb")
var cors = require('cors');

// Load Routes and Controllers
const postsRoutes = require('./routes/posts')
const errorController = require("./controllers/error")


// create Express App
const app = express()

// some security concerns taken care off
app.use(helmet())

// we want to use json
app.use(express.json());
express.urlencoded({ extended: true })

// enforce json for every response
app.use((req,res, next) => {
    // all API requests will answer with json format!
    res.setHeader('Content-Type', 'application/json');
    return next()
})

// cors setup
var whitelist = ['http://localhost:3000', "http://127.0.0.1", undefined]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

// Define Routes
app.use("/",postsRoutes)

// set the 404 handling routes directly to the controller methods
app.use(errorController.get404)

module.exports = app