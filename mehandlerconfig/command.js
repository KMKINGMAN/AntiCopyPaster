/*
---------------------------------------
|    All rights reserved to KIGNAMN    |
| If there is any error, just visit the|
|     KINGMANDEV Discord Server        |
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
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const fs = require("fs")

let table = new ascii("Commands");
table.setHeading("Command", "Load status");

module.exports = (client) => {
    readdirSync("./command/").forEach(dir => {
      

        const commands = readdirSync(`./command/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of commands) {
            let pull = require(`../command/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> missing a CMD Name`);
                continue;
            }
      
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    console.log(table.toString());    
}
