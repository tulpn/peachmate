const http = require('http')
const app = require("./app")


// Create HTTP Server
try{
    const server = http.createServer(app)
    server.listen(process.env.HTTP_PORT)
    console.log(`Starting Service on: ${process.env.HTTP_PORT}`)
}
catch(error) {
    console.error(`Could not start service on port: ${process.env.HTTP_PORT}`)
    console.error(error)
}