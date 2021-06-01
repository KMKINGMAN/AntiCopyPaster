const { Schema, model } = require('mongoose');
const reportblacklist = Schema({
    userid: {
        type: String,
        required: true
    },
});
module.exports = model('reblacklist', reportblacklist);