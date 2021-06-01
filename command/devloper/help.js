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