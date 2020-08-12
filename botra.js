const discord = require("discord.js")
const client = new discord.Client()
const alexa = require('alexa-bot-api')//package made by unque/dev and ctk warrior
var chatbot = new alexa("aw2plm")//free access key ctk channel

client.on('ready', () => {
  console.log('ready') 
  client.user.setActivity("I AM ON MAINTAINCE DO NOT DISTRUB")
});

client.on('error', console.error) 

client.on('message', async message => {
  if(message.author.bot) return;
  let content = message.content; 
  if(message.channel.name !== "chat-with-sp") return;
  chatbot.getReply(content).then(r => message.channel.send(r))
});

client.login("NzMzODgxNzc4MzA0OTc0OTA5.XxJmqg.xCtD71PuP-wBGHu9A7Auc0VFNiA")