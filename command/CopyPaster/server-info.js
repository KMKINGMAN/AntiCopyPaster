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
const discord = require("discord.js");
const me = require('../../mecodes-congig.json');
const guilmodal = require('../../me-mongomodals/CopyPasters/Guild')
const devs = me.divs
module.exports = {
  name: "server-info",
  category: "copypaster",
  description: "لعرض معلومات و ادله عن سيرفر الكوبي بيسترز",
  run: async (client, kmsg, args, PREFIX) => {
    if(!args[0]) return msg.reply('**Please Insert Server ID**')
    let data = await guilmodal.findOne({guildID: args[0]})
    if(!data) return kmsg.reply('**This is not copypaster Server**')
    kmsg.channel.send(`
    > **Server Name ${data.guildname}**
    > **ServerID: ${data.guildID}** 
    > **Server OwnerID: ${data.ownerID}**
    > **Discriptin : ${data.des} **
    > **OriginalCode : ${data.ocode} **
    > **FakeCodes : ${data.cpcode} **
    > **Reporter User : ${data.reprteduser}**
    `)
     
} 
}
