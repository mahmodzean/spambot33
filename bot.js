const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("500557063991328770")
setInterval(function() {
channel.send(`mmmmmmmmmmmmmmmmmmmmmmmmm mahmod pro xd pro xdxdxdxdxdxdxdxdxd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
