const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var parseISO = require('date-fns/parseISO')
var isFuture = require('date-fns/isFuture')
var isPast = require('date-fns/isPast')
var formatISO = require('date-fns/formatISO')


const postSchema = new Schema({
    message: Schema.Types.String,
    when: Schema.Types.Date,
    network: {
        type: String, 
        enum: ['linkedin', 'twitter'],
        default: 'linkedin'
    },
    status: {
        type: String, 
        enum: ['cancelled', 'posted', 'scheduled', 'draft'],
        default: 'scheduled'
    },
    postedOn: Schema.Types.Date,
    workerStatus: {
        type: String, 
        enum: ['queued', 'processing', 'completed', 'failed'],
        default: 'queued'
    },
});

class PostClass {
    /**
     * Checks that the status is correctly set
     */
    checkStatus(){
        if (this.message === "" || this.message === null || this.when === null || this.when === "" ){
            this.status = 'draft'
        }
        else if ( this.when !== "" && this.when !== null && this.message !== "" && this.message !== null){
            if(isFuture(parseISO(this.when))){
                this.status = "scheduled"
            } else if ( isPast(parseISO(this.when)) && isPast(parseISO(this.postedOn)) && this.workerStatus === "completed"){
                this.status = "posted"
            }
        }
    }

    /**
     * Only delete when this passes / returns true
     */
    canDelete() {
        if ( (this.postedOn === null || this.postedOn === undefined) && this.status !== "posted"){
            return true
        }
        return false
    }

    toApiJSON(){
        this.checkStatus()
        return {
            _id: this._id,
            message: this.message, 
            when: this.when,
            network: this.network, 
            status: this.status, 
            postedOn: this.postedOn,
            canDelete: this.canDelete()
        }
    }
}

postSchema.loadClass(PostClass)

module.exports = mongoose.model("Post", postSchema)




