/**
 ***********************
 * Created by KINGMAN
 ***********************
 * KINGMANDEV Owner :) 
 ───────█████████████████████
────████▀─────────────────▀████
──███▀───────────────────────▀███
─██▀───────────────────────────▀██
█▀───────────────────────────────▀█
█─────────────────────────────────█
█─────────────────────────────────█
█─────────────────────────────────█
█───█████─────────────────█████───█
█──██▓▓▓███─────────────███▓▓▓██──█
█──██▓▓▓▓▓██───────────██▓▓▓▓▓██──█
█──██▓▓▓▓▓▓██─────────██▓▓▓▓▓▓██──█
█▄──████▓▓▓▓██───────██▓▓▓▓████──▄█
▀█▄───▀███▓▓▓██─────██▓▓▓███▀───▄█▀
──█▄────▀█████▀─────▀█████▀────▄█
─▄██───────────▄█─█▄───────────██▄
─███───────────██─██───────────███
─███───────────────────────────███
──▀██──██▀██──█──█──█──██▀██──██▀
───▀████▀─██──█──█──█──██─▀████▀
────▀██▀──██──█──█──█──██──▀██▀
──────────██──█──█──█──██
──────────██──█──█──█──██
──────────██──█──█──█──██
──────────██──█──█──█──██
──────────██──█──█──█──██
──────────██──█──█──█──██
──────────██──█──█──█──██
──────────██──█──█──█──██
──────────██──█──█──█──██
──────────██──█──█──█──██
──────────██──█──█──█──██
──────────██──█──█──█──██
───────────█▄▄█▄▄█▄▄█▄▄█
 
 */
const Discord = require("discord.js");
const discord = require("discord.js");
const kingman = require('./Alive/kingman');
kingman();
const { MessageEmbed  ,  Collection , Client } = require("discord.js");
const client = new Client()
client.commands = new discord.Collection();
client.eventss = new discord.Collection();
client.aliases = new discord.Collection();
const fs = require('fs');
const invites = {};
const colors = require("colors");
/**
 * TOKEN/PREFIX/CONFIG-FILE
 */
const TOKEN_BOT = process.env['ME_TOKEN']
const MONGO_DDB = process.env['ME_MONGO']
const config = require('./mecodes-congig.json');
const PREFIX = config.prefix

/* ON ERROR */
client.on("error", console.error);
/**
 * COMMANDS HANDLER SETUP
 * EVENTS HANDLER SETUP
 */
["command", "events"].forEach(p => {
  require(`./mehandlerconfig/${p}`)(client);
});
/* 
    COMMAND HANDLER SETUP CODES
*/
client.on('message', kmsg => {
  const pmention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (kmsg.content.match(pmention)) {
    return kmsg.reply(`**MY PREFIX IS: ${PREFIX}**`)
  }
  if (kmsg.author.bot) return;
  if (!kmsg.guild) {
    return kmsg.reply("**ONLY WORK ON SERVERS NOT DM**")
  }
  let prefix = PREFIX;
const args1 = kmsg.content.slice(prefix.length).split(/ +/);
  if (!kmsg.content.startsWith(PREFIX)) return;
  const args = kmsg.content
    .slice(PREFIX.length)
    .trim() 
    .split(/ +/g); 
  const kmcommand = args.shift().toLowerCase();
  if (kmcommand.length === 0) return;
  let kmcode = client.commands.get(kmcommand);
  if (!kmcode) kmcode = client.commands.get(client.aliases.get(kmcommand));
  if (kmcode) kmcode.run(client, kmsg, args, PREFIX , prefix);
});


client.login(TOKEN_BOT)
