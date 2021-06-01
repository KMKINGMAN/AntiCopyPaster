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
    reporttype:{
        type: String,
    },
    gowner:{
        type: String,
        default: "None",
    },
    guild:{
        type: String,
        default: "None",
    },
    target:{
        type: String,
        default: "None",
    },
    guildname : {
      type: String,
    }
});
module.exports = model('reports', copypasterusers);