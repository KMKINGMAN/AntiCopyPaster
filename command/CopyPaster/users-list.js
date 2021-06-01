  
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
const me = require('../../mecodes-congig.json');
const discord = require("discord.js");
const umodal = require('../../me-mongomodals/CopyPasters/User')
module.exports = {
  name: "userslist",
  category: "copypaster",
  description: "لعرض قائمة الاشخاص الكوبي بيستر",
  run: async (client, kmsg, args, PREFIX) => {
    let users = []
    let data = await umodal.find({});
    data.forEach(async (mecodes) => {
        users.push(`<@!${mecodes.userID}>`)
  })
    try {
    let embed = new discord.MessageEmbed()
    .setTitle("**Copy Paster Users**")
    .setAuthor(kmsg.author.tag, kmsg.author.displayAvatarURL({ dynamic: true }))
    .setFooter(kmsg.guild.name, kmsg.guild.iconURL())
    .setThumbnail(kmsg.guild.iconURL())
    .addField('**Copy Paster Users**', `${users.join("\n")}`)
    .setColor("GREEN")
    kmsg.channel.send({ embed: embed })

    } catch(e){
      kmsg.reply(`**No Users Yet!!**`)

    }
    
}
}
