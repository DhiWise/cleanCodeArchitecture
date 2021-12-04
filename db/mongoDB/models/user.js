let mongoose = require('../connection.js')

let Schema = mongoose.Schema
let UserSchema = new Schema({
    firstName: String,
    lastName: String,
    fullName: String,
    email: {
        type: String,
        required: true,
        unique: true // `email` must be unique
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDelete: Boolean,
});

let User = mongoose.model('User', UserSchema)

module.exports = User;
