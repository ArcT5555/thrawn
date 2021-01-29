require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client;
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", (msg) => {
    if (msg.content === "Hello there") {
        msg.reply("General Kenobi, it is pleasning to hear you say that!")
    }
})
client.on("message", (msg) => {
    if (msg.content === "Thrawn. Have you had your coffee?") {
        msg.reply("Yes Sir. I'll be awake all day, 24/7")
    }
})
client.on("message", (msg) => {
    if (msg.content === "identify") {
        msg.reply("My name is Grand Admrial Thrawn... or atleast his intelligence. I am the culmination of his intelligence and machine learning. I was born to help the @41st Elite Corps. I provide tactical advice and a set of battle rules, plans and stategic suggestions. Good hunting")
    }
})
if (message.content === 'restartthebot') {
  if (message.author.id !== 'Owners ID') return;
  message.channel.send('Restarted.').then(() => {
  process.exit(1);
})
};
client.login(process.env.token);
