export default class Post {
  title = null;
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
   * @param {String} title Some networks require a title
   * @param {String} message Post content
   * @param {Date} when Is a datetime object
   * @param {String} network One of "linkedin", "twitter"
   * @param {String} status One of "posted", "scheduled", "cancelled", "deleted"
   * @param {String} _id Server Object ID
   */
  constructor(element = {}) {
    this.title = element.title || null;
    this.message = element.message || null;
    this.when = element.when || null;
    this.network = element.network || null;
    this.status = element.status || null;
    this.id = element._id || null;
  }

  fromServerJSON(data) {
    this.id = data._id;
    this.title = data.title || null;
    this.message = data.message || null;
    this.when = data.when || null;
    this.network = data.network || null;
    this.status = data.status || null;
  }

  toServerJSON() {
    return {
      _id: this.id || null,
      title: this.title || null,
      message: this.message || null,
      when: this.when || null,
      network: this.network || null,
      status: this.status || null,
    };
  }
}
