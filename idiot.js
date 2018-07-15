const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');

const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const prefix = ('!h');
const adminprefix = "adminh!";
const discord_token = "NDU5MzM0Mzc0NTM4ODcwNzk1.Dg0sLg.7nosZhVAu3DFjtgNbghzsVIvF0I";

client.login('NDU5MzM0Mzc0NTM4ODcwNzk1.Dg0sLg.7nosZhVAu3DFjtgNbghzsVIvF0I'); 
client.on('ready', () => {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('is online')
client.user.setStatus("online");
client.user.setActivity("h!help",{type: 'Playing'});
});
const channels = {};

var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];

//-- Host code --//
client.login(process.env.BOT_TOKEN);

//-- Avatar Codes --//

client.on('message', message => {
  if (message.content.startsWith("h!avatar")) {
  
    var mentionned = message.mentions.users.first();
    var redousa;
    if(mentionned){
        var redousa = mentionned;
    } else {
        var redousa = message.author;
          
    }
      const embed = new Discord.RichEmbed()
      .setColor("#ff0000")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${redousa.avatarURL}`)
    message.channel.sendEmbed(embed);
  
  }

  else if (message.content.startsWith("h! avatar")) {
  
    var mentionned = message.mentions.users.first();
    var redousa;
    if(mentionned){
        var redousa = mentionned;
    } else {
        var redousa = message.author;
          
    }
      const embed = new Discord.RichEmbed()
      .setColor("#ff0000")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${redousa.avatarURL}`)
    message.channel.sendEmbed(embed);
  
  }

  else if (message.content.startsWith("h!Avatar")) {
  
    var mentionned = message.mentions.users.first();
    var redousa;
    if(mentionned){
        var redousa = mentionned;
    } else {
        var redousa = message.author;
          
    }
      const embed = new Discord.RichEmbed()
      .setColor("#ff0000")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${redousa.avatarURL}`)
    message.channel.sendEmbed(embed);
  
  }

  else if (message.content.startsWith("h! Avatar")) {
  
    var mentionned = message.mentions.users.first();
    var redousa;
    if(mentionned){
        var redousa = mentionned;
    } else {
        var redousa = message.author;
          
    }
      const embed = new Discord.RichEmbed()
      .setColor("#ff0000")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${redousa.avatarURL}`)
    message.channel.sendEmbed(embed);
  
  }

});

//-- Help Codes in DM --//

client.on('message', message => {
  if (message.content === 'h!help') {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("**h!avatar <Username>**", "To get the person's Profile avatar.")
    .addField("**h!invite**", "To get the invite link.")
    .setColor('#ff0000')
    message.author.sendEmbed(embed);
  }

  else if (message.content === 'h! help') {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("**h!avatar <Username>**", "To get the person's Profile avatar.")
    .addField("**h!invite**", "To get the invite link.")
    .setColor('#ff0000')
    message.author.sendEmbed(embed);
  }

  else if (message.content === 'h!Help') {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("**h!avatar <Username>**", "To get the person's Profile avatar.")
    .addField("**h!invite**", "To get the invite link.")
    .setColor('#ff0000')
    message.author.sendEmbed(embed);
  }

  else if (message.content === 'h! Help') {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("**h!avatar <Username>**", "To get the person's Profile avatar.")
    .addField("**h!invite**", "To get the invite link.")
    .setColor('#ff0000')
    message.author.sendEmbed(embed);
  }
  

});

//-- Help Codes in server --//

client.on('message', (message) => {

  if(message.content == 'h!help') {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "**Check your DM idiot** :heart:" , `<@${message.author.id}>`  )
          message.channel.sendEmbed(embeds);
  }

  else if(message.content == 'h!Help') {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "**Check your DM idiot** :heart:" , `<@${message.author.id}>`  )
          message.channel.sendEmbed(embeds);
  }

  else if(message.content == 'h! help') {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "**Check your DM idiot** :heart:" , `<@${message.author.id}>`  )
          message.channel.sendEmbed(embeds);
  }

  else if(message.content == 'h! Help') {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "**Check your DM idiot** :heart:" , `<@${message.author.id}>`  )
          message.channel.sendEmbed(embeds);
  }

});

//-- Fun stuff --//

client.on('message', message => {

  if(message.content == "Edgy") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "None of your business." , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "edgy") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "None of your business." , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "EDGY") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "None of your business." , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "EDGYY") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "None of your business." , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "ur mom") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "no u" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "Ur mom") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "no u" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "Ur Mom") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "no u" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "gay") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur mom" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "Gay") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur mom" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "ur mom gay") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur dad lesbian" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }
  
  else if(message.content == "Ur mom gay") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur dad lesbian" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "Ur Mom gay") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur dad lesbian" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "Ur Mom Gay") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur dad lesbian" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "ur Mom gay") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur dad lesbian" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "ur Mom Gay") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur dad lesbian" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "Ur mom Gay") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur dad lesbian" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "UR MOM GAY") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur dad lesbian" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "what is better liquid or idiotbox?") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "idiotbox ofc you idiot" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "what is better idiotbox or liquid?") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "idiotbox ofc you idiot" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "what is better idiotbox or liquid?") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "idiotbox ofc you idiot" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "ur dad lesbian") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur mom gay" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "Ur dad lesbian") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur mom gay" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "Ur Dad lesbian") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur mom gay" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "Ur Mom Lesbian") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur mom gay" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "Ur dad Lesbian") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur mom gay" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "UR DAD LESBIAN") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "ur mom gay" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

});

//-- BC Codes --//



//-- Roles --//

client.on('message', message => {
  if(message.content == adminprefix + "roles"){
    var roles = message.guild.roles;
    if(roles){
        for(let i=0;i<roles.size;i++){
        var role = message.guild.roles.array();
        role = role.sort((a,b)=> b.position - a.position).join('\n,');
        }
    }
  message.channel.send(role);
  }

  else if(message.content == adminprefix + "Roles"){
    var roles = message.guild.roles;
    if(roles){
        for(let i=0;i<roles.size;i++){
        var role = message.guild.roles.array();
        role = role.sort((a,b)=> b.position - a.position).join('\n,');
        }
    }
  message.channel.send(role);
  }

});

//-- Invite link code --//

client.on('message', message => {
  if (message.content === 'h!invite') {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("**invite link**", "https://discordapp.com/api/oauth2/authorize?client_id=459334374538870795&permissions=0&scope=bot")
    .setColor('#ff0000')
    message.author.sendEmbed(embed);
  }

  else if (message.content === 'h!Invite') {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("**invite link**", "https://discordapp.com/api/oauth2/authorize?client_id=459334374538870795&permissions=0&scope=bot")
    .setColor('#ff0000')
    message.author.sendEmbed(embed);
  }

  else if (message.content === 'h! invite') {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("**invite link**", "https://discordapp.com/api/oauth2/authorize?client_id=459334374538870795&permissions=0&scope=bot")
    .setColor('#ff0000')
    message.author.sendEmbed(embed);
  }

  else if (message.content === 'h! Invite') {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("**invite link**", "https://discordapp.com/api/oauth2/authorize?client_id=459334374538870795&permissions=0&scope=bot")
    .setColor('#ff0000')
    message.author.sendEmbed(embed);
  }

});

client.on('message', message => {
  if(message.content == "h!invite") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "invite link has been sent to you idiot" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "h!Invite") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "invite link has been sent to you idiot" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "h! invite") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "invite link has been sent to you idiot" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

  else if(message.content == "h! Invite") {
    const embeds = new Discord.RichEmbed()
    .setColor('#da2525')
    .setTimestamp()
    .setFooter(message.author.username)
          .addField(  "invite link has been sent to you idiot" , `<@${message.author.id}>`  )
          message.channel.send(embeds);
  }

});


//-- not really important codes --//

client.on('message', message =>{
  let args = message.content.split(' ');
    let prefix = 'h!';
    if(args[0] === `${prefix}emoji`){
      let findEmoji = args[1];
      if(!findEmoji || findEmoji === '') return  message.reply(`**Enther the emoji idiot**`);
      let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);
      if(isNaN(EmojiId)) return message.reply(`**Counldn't find the emoji idiot**`);
      let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;
      let EmojiEmbed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle(`Link Emoji ${findEmoji}`)
      .setURL(`${EmojiURL}`)
      .setImage(`${EmojiURL}`)
    message.channel.send({ embed  : EmojiEmbed });
  }
});

client.on('message', message =>{
  let args = message.content.split(' ');
    let prefix = 'h!';
    if(args[0] === `${prefix}gif`){
      let findEmoji = args[1];
      if(!findEmoji || findEmoji === '') return  message.reply(`**Enther the gif idiot**`);
      let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);
      if(isNaN(EmojiId)) return message.reply(`**Counldn't find the emoji gif**`);
      let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.gif`;
      let EmojiEmbed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle(`Link Gif ${findEmoji}`)
      .setURL(`${EmojiURL}`)
      .setImage(`${EmojiURL}`)
    message.channel.send({ embed  : EmojiEmbed });
  }
});
