const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
});

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;