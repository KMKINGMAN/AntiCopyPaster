/**
 * userid : target
 * discrip: discription
 * ocode : original codes
 * cpcode : copypaster Codes
 * rtype: user
 * repouser : userID 
 */

const umodal = require('../../me-mongomodals/CopyPasters/reprt')
 const discord = require("discord.js");
const me = require('../../mecodes-congig.json');
 module.exports = {
   name: "userreport",
   category: "copypaster",
   description: "للابلاغ عن يوزر",
   run: async (client, kmsg, args) => {
    let filter = (m) => m.author.id === kmsg.author.id;
    let ch = client.guilds.cache.get(me.server).channels.cache.get(me.rech);
     let userid = kmsg.channel.send(`
     > **USER ID **
     `).then( async msg1 => {
       kmsg.channel.awaitMessages(filter, {
         max: 1,
         time: 90000,
         errors: ["time"]
       }).then(uid => {
         uid.first().delete();
         userid = uid.first().content;
         let discrip;
         msg1.edit(`
         > **Please Write the Describtion Of Proplem**
         `).then(async msg2 => {
             kmsg.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ["time"]
             }).then(des => {
                 des.first().delete()
                 discrip = des.first().content;
                 let ocode;
                 msg2.edit(`
                 > ** Plese Send Original Codes / project Link [Uploade Project on some Host Like Top4Top] **
                 `).then(async msg3 =>{
                     kmsg.channel.awaitMessages(filter, {
                         max: 1,
                         time: 90000,
                         errors: ["time"]
                     }).then(ocodes =>{
                         ocodes.first().delete();
                         ocode = ocodes.first().content;
                         let cpcode;
                         msg3.edit(`
                         > **Plese Send CopyPaser Codes / project Link [Uploade Project on some Host Like Top4Top] **
                         `).then(async msg4 =>{
                             kmsg.channel.awaitMessages(filter, {
                                 max: 1,
                                 time: 90000,
                                 errors: ["time"]
                             }).then(cpcodes => {
                                 cpcodes.first().delete();
                                 cpcode = cpcodes.first().content;
                                 msg4.edit(`
                                 > **Reaction [✅] if you Conferm send a codes and [❌] to cansle **
                                 `).then(async s => {
                                     s.react('✅')
                                     s.react('❌')
                                     let re = (react, user) => react.emoji.name  === "✅" && user.id === kmsg.author.id;
                                     let re2 = (react, user) => react.emoji.name  === "❌" && user.id === kmsg.author.id;
                                     let rec = s.createReactionCollector(re, {time: 0});
                                     let re2c = s.createReactionCollector(re2, {time: 0});
                                     rec.on("collect", async c =>{
                                         s.edit(`
                                         > ** Done I sent a Report**
                                         `)
                                         .then( async r =>{
                                            r.delete({ timeout: 5000 })
                                          })
                                          let data = await umodal.create({
                                              userID: kmsg.author.id,
                                              des : discrip,
                                              ocode: ocode,
                                              cpcode : cpcode,
                                              reporttype : "user",
                                              target : userid
                                          })
                                          data.save().catch(e => console.log(e))
                                          /**
  * userid : target
  * discrip: discription
  * ocode : original codes
  * cpcode : copypaster Codes
  * rtype: user
  * repouser : userID 
  */
                                        ch.send(`
                                        > **target : ${userid}**
                                        > **discription : ${discrip}**
                                        > **original codes : ${ocode}**
                                        > **CopyPaser Code : ${cpcode}**
                                        > **Reporter : ${kmsg.author.id}**
                                        > **report type : user **
                                        `).then(m =>{
                                         m.react('✅')
                                         m.react('❌')
                                             })
                                             })
                                                 })
                                                 re2c.on('collect', c=>{
                                                     s.edit(`
                                                     > **Done Cancel**
                                                     `).then(r =>{
                                                     r.delete({ timeout: 5000 })
                                                     })
                                                 })
                                                 s.delete({ timeout: 10000 }).catch(e =>{
                                                     console.log(' ')
                                                 })
 
                             })
                         })
                     } )
 
                 })
             })
         })
       })
     })
  }
 }