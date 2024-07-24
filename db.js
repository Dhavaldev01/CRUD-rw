const mongoose = require('mongoose');


// mongodb url define
const MongoDBURL = 'mongodb://localhost:27017/crud-rw'

mongoose.connect(MongoDBURL ,{
    useNewUrlParser : true,
    useUnifiedTopology : true  /// that is not required Many not Working that time Write
});

const db = mongoose.connection;

db.on('connected' , ()=>{
    console.log("Connected to MongoDB Server");
})

db.on('disconnected' , ()=>{
    console.log("Disconnected to MongoDb Server");

})

db.on('error' , (err)=>{
    console.log("Error :" , err);
})
  

module.exports = db;