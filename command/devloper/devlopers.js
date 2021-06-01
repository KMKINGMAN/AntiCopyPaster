const discord = require("discord.js");
const me = require('../../mecodes-congig.json');
const usermodal = require('../../me-mongomodals/CopyPasters/User')
const devs = me.divs
module.exports = {
  name: "devlopers",
  category: "MeCodes",
  description: "معلومات التواصل مع مطور البوت",
  run: async (client, kmsg, args, PREFIX) => {
      kmsg.channel.send(`
      > ** Devloper Name : [KINGMAN] **
      > ** Devloper Github : [https://github.com/MeKINGMAN] ** 
      > ** Devloper Phone Number : [+962792914245] ** 
      > ** Support Discord Server : [ https://discord.gg/2wJqGg3KY8 ] ** 
      `)
     
} 
}
