const mongoose = require('mongoose');
const discord = require("discord.js");
const MONGO_DDB = process.env.ME_MONGO 
module.exports = {
	name: 'ready',
async execute(client) {
    mongoose.connect(MONGO_DDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(console.log(`
_______________________________

✅ ==> Mongo-DB Connection is OK 
_______________________________
    `));
}
}
