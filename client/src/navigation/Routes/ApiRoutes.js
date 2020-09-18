/**
 * Define the API Endpoint and the routes
 * This is done based on the .env configuration for development and production (endpoint)
 * 
 * We can have seperate routes for authenticated routes and non-auth routes.
 */


let apiEndpoint = ""
if (process.env.NODE_ENV !== "production") {
    // development
    apiEndpoint = "http://localhost:8888/"
} else {
    // production urls
    apiEndpoint = ""
}

let authenticatedRoutes = []

let routes = []

export const allRoutes = [...authenticatedRoutes, ...routes]
export { apiEndpoint }
