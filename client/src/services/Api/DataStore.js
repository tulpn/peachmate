/**
 * Setup an axios wrapper, so that we don't have to write the baseURL in any request.
 * We set it once globally form the endpoint of our API Routes configuration
 */
import axios from "axios"
import { apiEndpoint } from "../../navigation/Routes/ApiRoutes"
const instance = axios.create({
    baseURL: apiEndpoint,
})

export default instance