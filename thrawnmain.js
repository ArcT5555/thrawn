require("dotenv").config()
const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
fs.readdir("./events/", (err, files) => {
    files.forEach((file) => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split(".")[0]
        client.on(eventName, (arg) => eventHandler(client, arg))
    })
})

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
