const connection = require('../config/connection');
const {User, Thought, reactionSchema} = require('../models');

connection.on('error', (err) => err);

connection.once('open', async()=>{
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.create([{
        username:"vicdotexe",
        email:"vicdotexe@gmail.com"
    },
    {
        username:"cameron",
        email:"cameron@gmail.com"
    }]);

    console.log('Seeded!');
    process.exit(0);
})