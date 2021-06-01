/**
 *     userID: {
        type: String,
        required: true
    },
    des : {
        type: String,
        default: "",
    },
    ocode:{
        type: String,
    },
    cpcode:{
        type: String,
    },
    reprteduser:{
        type: String,
    }
 */
const discord = require("discord.js");
const me = require('../../mecodes-congig.json');
const usermodal = require('../../me-mongomodals/CopyPasters/User')
const devs = me.divs
module.exports = {
  name: "user-info",
  category: "copypaster",
  description: "لجلب معلومات عن الشخص",
  run: async (client, kmsg, args, PREFIX) => {
    if(!args[0]) return kmsg.reply('**Please Insert User ID**')
    let data = await usermodal.findOne({userID: args[0]})
    if(!data) return kmsg.reply('**This youser is not copypaster**')
    kmsg.channel.send(`
    > **User ID: ${data.userID}** 
    > **Discriptin : ${data.des} **
    > **OriginalCode : ${data.ocode} **
    > **FakeCodes : ${data.cpcode} **
    > **Reporter User : ${data.reprteduser}**
    `)
     
} 
}