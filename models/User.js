const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema(
    {

    }
);

const User = Mongoose.model('User', userSchema)

module.exports = User;