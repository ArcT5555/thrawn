require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client()

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

client.login(process.env.token)
