const me = require('../../mecodes-congig.json');
const discord = require("discord.js");
const guilmodal = require('../../me-mongomodals/CopyPasters/Guild')
module.exports = {
  name: "serverlist",
  category: "copypaster",
  description: "قائمة السيرفرات",
  run: async (client, kmsg, args, PREFIX) => {
    let users = []
    let data = await guilmodal.find({});
    data.forEach(async (mecodes) => {
        users.push(`${mecodes.guildID} - ${mecodes.guildname}`)
  })
    try{
     let embed = new discord.MessageEmbed()
    .setTitle("**Copy Paster Guilds**")
    .setAuthor(kmsg.author.tag, kmsg.author.displayAvatarURL({ dynamic: true }))
    .setFooter(kmsg.guild.name, kmsg.guild.iconURL())
    .setThumbnail(kmsg.guild.iconURL())
    .addField('**Copy Paster Servers**', `${users.join(`/n`)}`)
    .setColor("GREEN")
    kmsg.channel.send({ embed: embed })
    } catch(e){
      kmsg.reply(`**No Servers Yet!!**`);
    }
}
}