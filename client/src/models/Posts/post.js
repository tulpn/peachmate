import parseISO from 'date-fns/parseISO'
import formatISO from 'date-fns/formatISO'

export default class Post {
  message = null;
  when = null;
  network = null;
  status = null;
  id = null;

  /**
   * A post is scheduled to be posted to a network at a given time.
   * The status of the post represents it's current posting status.
   * Every Post coming from a server has to have an ID.
   * @constructor
   * @param {String} message Post content
   * @param {Date} when Is a datetime object
   * @param {String} network One of "linkedin", "twitter"
   * @param {String} status One of "posted", "scheduled", "cancelled", "deleted"
   * @param {String} _id Server Object ID
   */
  constructor(element = {}) {
    this.message = element.message || null;

    // always keep when as date object! (or null)
    this.when = this.parseWhen(element.when)

    this.networks = element.networks || null;
    this.status = element.status || null;
    this.id = element._id || null;
  }


  parseWhen(when){
    if (typeof when === "string"){
      return parseISO(when)
    } 
    
    if (when instanceof Date){
      return when
    }
    return null
  }


  fromServerJSON(data) {
    this.id = data._id;
    this.message = data.message || null;
    if ( data.when !== undefined && data.when !== null){
      this.when = parseISO(data.when);
    }
    else{
      this.when = null;
    }
    
    
    this.networks = data.networks || null;
    this.status = data.status || null;
  }

  toServerJSON() {

    return {
      _id: this.id || null,
      message: this.message || null,
      when: this.when === null ? null : formatISO(this.when),
      networks: this.networks || null,
      status: this.status || null,
    };
  }
}
