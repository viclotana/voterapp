const mongoose = require('mongoose');

// map global promises
mongoose.Promise = global.Promise;

// mongoose connect
mongoose.connect('mongodb://viclotana:lll102@ds129459.mlab.com:29459/voterapp')
.then(()=> console.log('mongo db connected'))
.catch(err => console.log(err));