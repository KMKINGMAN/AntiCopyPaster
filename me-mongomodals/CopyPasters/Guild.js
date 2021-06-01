const { Schema, model } = require('mongoose');
const copypasterguild = Schema({
    guildID: {
        type: String,
        required: true
    },
    ownerID: {
      type: String,
    },
    des:{
        type: String,
    },
    ocode:{
        type: String,
    },
    cpcode:{
        type: String,
    },
    reprteduser:{
        type: String,
    },
    guildname : {
      type: String,
    }
    
});
module.exports = model('copypasterguilds', copypasterguild);
/**
 * guildID
 * ownerID
 * des
 * ocode
 * cpcode
 * reprteduser
 */