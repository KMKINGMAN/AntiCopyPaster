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
const {MessageEmbed} = require("discord.js");
const me = require('../../mecodes-congig.json');
const usermodal = require('../../me-mongomodals/CopyPasters/User')
const devs = me.divs
module.exports = {
  name: "help",
  category: "MeCodes",
  description: "لعرض قائمة الاوامر",
  run: async (client, kmsg, args, PREFIX) => {
    let commands = kmsg.client.commands.array();
    let EMBED = new MessageEmbed()
    .setTitle(`MeCodes`)
    .setDescription(`**بوت فضح الكوبي بيستر الاول بالديسكورد**`)
    .setColor("GOLD");
    commands.forEach((cmd) => {
        EMBED.addField(
          `**${PREFIX}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
          `${cmd.description}`,
          true
        );
      });
    kmsg.channel.send(EMBED)
     
} 
}
