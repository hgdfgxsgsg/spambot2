const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = require ('-')


client.on('ready', () => {
});

client.on('ready', async() => {
var server = "493237177170395155"; // ايدي السررفر
var channel = "510454710378037248";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki ,mohammed turki , ')
    },305);
})

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



let args = message.content.split(" ").slice(1);

if(!args) return message.channel.send('${prefix}say <words>');	



if (command == "5") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }

});

client.on("message", msg => {
if(msg.content === "credit") {
msg.channel.send("#credit")
}
});












client.login("NTA1NjQ0NDg3ODU5NjM0MTg3.DrWloQ.smmi0AXp-_f3yTYTY9t9cKaMst0");
