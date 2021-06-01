const discord = require("discord.js");
const me = require('../../mecodes-congig.json');
const devs = me.divs
const usermodal = require('../../me-mongomodals/CopyPasters/User')
module.exports = {
  name: "adduser",
  category: "copypaster",
  description: "لاضافة يوزر الى القائمة",
  run: async (client, kmsg, args, PREFIX) => {
    let filter = (m) => m.author.id === kmsg.author.id;
    
    let userid = kmsg.channel.send(`
    > **Please Insert The UserID**
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
                                    
                                    rec.on("collect", async c =>{
                                        s.edit(`
                                        > ** Done I sent a Report**
                                        `)
                                        .then( async r =>{
                                           r.delete({ timeout: 5000 })
                                         })
                                         let data = await usermodal.create({
                                            userID: userid,
                                            des : discrip,
                                            ocode: ocode,
                                            cpcode : cpcode,
                                            reprteduser : kmsg.author.id,
                                         })
                                         data.save().catch(e => console.log(e))
                                         /**
 * userID
 * des 
 * ocode
 * cpcode
 * reprteduser
 */
                                      //  ch.send(`
                                      //  > **target : ${userid}**
                                      //  > **discription : ${discrip}**
                                      //  > **original codes : ${ocode}**
                                      //  > **CopyPaser Code : ${cpcode}**
                                      //  > **Reporter : ${kmsg.author.id}**
                                      //  >** report type : user** 
                                      //  `).then(m =>{
                                      //   m.react('✅')
                                      //   m.react('❌')
                                      //       })
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