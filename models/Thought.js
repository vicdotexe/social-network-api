const Mongoose = require('mongoose');

const thoughtSchema = new Mongoose.Schema(
    {

    }
);

const Thought = Mongoose.model('Thought', thoughtSchema)

module.exports = Thought;