
const mongoose = require('mongoose')

// connect to Mongo DB
try{
    mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false })
} catch(error){
    //console.error("MongoDb Error", error)
}

mongoose.connection.on('error', err => {
    //console.error("MongdoDb error:", err);
  });

mongoose.connection.on('connected', err => {
   // console.log("MongdoDb connected...");
});