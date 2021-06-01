const { Schema, model } = require('mongoose');
const copypasterusers = Schema({
    userID: {
        type: String,
        required: true
    },
    des : {
        type: String,
        default: "",
    },
    ocode:{
        type: String,
    },
    cpcode:{
        type: String,
    },
    reprteduser:{
        type: String,
    }
});
module.exports = model('copypasterusers', copypasterusers);
