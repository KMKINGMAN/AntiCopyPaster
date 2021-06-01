  
/*
---------------------------------------
|    All rights reserved to KIGNAMN    |
| If there is any error, just visit the|
|        MeCodes Discord Server        |
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
const discord = require("discord.js");
const me = require('../../mecodes-congig.json');
const devs = me.divs
const umodal = require('../../me-mongomodals/CopyPasters/User')
module.exports = {
  name: "removeuser",
  category: "copypaster",
  description: "لازالة كوبي بيستر من القائمة",
  run: async (client, kmsg, args, PREFIX) => {
      if(!args[0]) return kmsg.reply(`**Please Insert UserID**`);
      let data = await umodal.findOneAndDelete({userID: args[0]})
      if(!data) return kmsg.reply(`**This User is not CopyPaster**`);
      kmsg.channel.send(`**Deleted User From DataBase**`)
     
} 
}
