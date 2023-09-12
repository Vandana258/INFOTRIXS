/*const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://<Chatapplication>:<OldHF9NqWTxkwTv1>@cluster0.g8mwqyl.mongodb.net/chatApp?
retryWrites=true&w=majority`)
.then(() =>{
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});*/


const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.g8mwqyl.mongodb.net/chatApp?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });