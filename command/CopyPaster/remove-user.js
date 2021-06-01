const discord = require("discord.js");
const me = require('../../mecodes-congig.json');
const devs = me.divs
const umodal = require('../../me-mongomodals/CopyPasters/User')
module.exports = {
  name: "removeuser",
  category: "copypaster",
  description: "لازالة يوزر من القائمة",
  run: async (client, kmsg, args, PREFIX) => {
      if(!args[0]) return kmsg.reply(`**Please Insert UserID**`);
      let data = await umodal.findOneAndDelete({userID: args[0]})
      if(!data) return kmsg.reply(`**This User is not CopyPaster**`);
      kmsg.channel.send(`**Deleted User From DataBase**`)
     
} 
}