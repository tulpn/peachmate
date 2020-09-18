import axios from "./DataStore";

/**
 * Used as a base class from which the api endpoints inherit. Use these methods
 * Allows us to quickly change axios if needed and make sure that calls are
 * authorised if possible
 */
class ApiBase {
  /**
   * Returns axios GET request
   */
  get = url => {
    return axios.get(url);
  };

  /**
   * Returns axios POST request
   */
  post = (url, data, extras = {}) => {
    return axios.post(url, data, extras);
  };

  /**
   * Returns axios DELETE request
   */
  delete = (url, data) => {
    return axios.delete(url, data);
  };
  
  /**
   * Returns axios PUT request
   */
  put = (url, data, extras = {}) => {
    return axios.put(url, data, extras);
  };
}

export default ApiBase;
