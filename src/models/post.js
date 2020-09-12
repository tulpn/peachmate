const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const postSchema = new Schema({
    title: Schema.Types.String,
    message: Schema.Types.String,
    when: Schema.Types.Date,
    network: {
        type: String, 
        enum: ['linkedin', 'twitter'],
        default: 'linkedin'
    },
    posted: Schema.Types.Boolean
});

module.exports = mongoose.model("Post", postSchema)




