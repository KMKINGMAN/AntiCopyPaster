/*
---------------------------------------
|    All rights reserved to KIGNAMN    |
| If there is any error, just visit the|
|     KINGMANDEV Discord Server        |
|     Phone Number: +962792914245      |
---------------------------------------
______███████████████████████
______█████████████████████████
______███████████████████████__██
____▒░██████████████████████____██
___▒░░████████████████████▒▒____██
__▒▒░░███████████████████▒░▒___██
__▒░░░▒█████████████████▒░░▒__██
_▒▒░░░░▒███████████████▒░░▒_██
▒░▒░░░░░▒█████████████▒░░░▒█
▒▒░▒▒░░░▒▒███████████▒░░▒▒
▒▒░░▒▒░░░▒███████████▒▒░░
▒░▒▒░░▒▒░░░░▒▒░░░░░░░░▒▒
▒▒░░▒░░▒▒░░░░▒░░░░░░░▒▒
▒▒▒░░▒░░▒▒░░░░░░░░░░▒▒
_▒░▒░░░▒▒░░░░░░░░░░▒▒
__▒░▒░░░▒░░░░░░░░░░▒▒
___▒░▒▒░░░░░░░░░░░░▒▒
____▒░▒▒░░░░░░░░░░░▒▒
______▒▒░░░░░░░░░░░▒▒
_______▒▒░░░░░░░░░░▒▒
________▒▒░░░░░░░░░▒▒
_________▒▒░░░░░░░░▒▒
_________▒▒░░░░░░░░▒▒
_________▒▒░░░░░░░░▒▒
*/
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
