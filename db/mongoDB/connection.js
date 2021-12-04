let mongoose = require('mongoose');

// Use ES6 Promises for mongoose
mongoose.Promise = global.Promise;

const uri = process.env.NODE_ENV === 'test' ? process.env.DB_TEST_URL : process.env.DB_URL;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true
});

// Signal connection
mongoose.connection.once('open', function () {
    console.log('Connection has been made');
}).on('error', function (error) {
    console.log('Connect error', error);
}).on('disconnected', function () {
    console.log('Connection disconnected');
})
module.exports = mongoose
