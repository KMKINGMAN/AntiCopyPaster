const discord = require("discord.js");
const me = require('../../mecodes-congig.json');
const usermodal = require('../../me-mongomodals/CopyPasters/User')
const devs = me.divs
module.exports = {
  name: "devlopers",
  category: "MeCodes",
  description: "لجلب معلومات التواصل مع المطور",
  run: async (client, kmsg, args, PREFIX) => {
      kmsg.channel.send(`
      > ** Devloper Name : [KINGMAN] **
      > ** Devloper Github : [https://github.com/MeKINGMAN] ** 
      > ** Devloper Phone Number : [+962792914245] ** 
      `)
     
} 
}