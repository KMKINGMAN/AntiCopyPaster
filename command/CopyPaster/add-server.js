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
const discord = require("discord.js");
const me = require('../../mecodes-congig.json');
const guilmodal = require('../../me-mongomodals/CopyPasters/Guild')
const devs = me.divs
module.exports = {
  name: "addserver",
  category: "copypaster",
  description: "لاضافة سيرفر كوبي بيستر",
  run: async (client, kmsg, args, PREFIX) => {
        let filter = (m) => m.author.id === kmsg.author.id;
        let userid = kmsg.channel.send(`
        > ***Please Insert The GuildID**
        `).then( async msg1 => {
          kmsg.channel.awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          }).then(uid => {
            uid.first().delete();
            userid = uid.first().content;
            let gownerid;
            msg1.edit('*Please Insert The Guild Owner ID').then(async msg9 => {
                kmsg.channel.awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                }).then(async gown => {
                gown.first().delete()
                gownerid = gown.first().content;
                let guildname;
                msg9.edit(`
                > ***Please Insert The Guild Name**
                `).then(async msg98 => {
            kmsg.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ["time"]
            }).then(async gname => {
                gname.first().delete()
                guildname = gname.first().content;
                let discrip;
                msg98.edit(`
                > **Please Write the Describtion Of Proplem**
                `).then(async msg2 => {
                        kmsg.channel.awaitMessages(filter, {
                            max: 1,
                            time: 90000,
                            errors: ["time"]
                        }).then(async des => {
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
                                    let reporter;
                                    msg3.edit(`
                                    > **ReporterUserID **
                                    `).then(async msg66 =>{
                                        kmsg.channel.awaitMessages(filter, {
                                            max: 1,
                                            time: 90000,
                                            errors: ["time"]
                                        }).then(repor =>{
                                            repor.first().delete();
                                            reporter = repor.first().content;
                                            let cpcode;
                                            msg66.edit(`
                                            > **Plese Send CopyPaser Codes / project Link [Uploade Project on some Host Like Top4Top] **
                                            `)
                                    .then(async msg4 =>{
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
                                                     let data = await guilmodal.create({
                                                        guildID: userid,
                                                        ownerID : gownerid,
                                                        ocode: ocode,
                                                         cpcode : cpcode,
                                                         reprteduser : reporter,
                                                         userID : kmsg.author.id,
                                                         des : discrip,
                                                         guildname: guildname
                                                     })
                                                     data.save().catch(e => console.log(e))
                                                        })
                                                            })
                                                            re2c.on('collect', c=>{
                                                                s.edit(`
                                                                > **Done Cancel Share Code **
                                                                `).then(r =>{
                                                                r.delete({ timeout: 5000 })
                                                                })
                                                            })
                                                            s.delete({ timeout: 10000 }).catch(e =>{
                                                                console.log(' ')
                                                            })
                                                        })
                                                        })
                                                        })
                                                    })
            
                                        })
                                    })
                                } )
            
                            })
                        })
                    })
                  })
                })
            })
        })
     }
  }
