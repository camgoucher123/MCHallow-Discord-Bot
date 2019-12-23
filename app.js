const Discord = require('discord.js');
const client = new Discord.Client();
var general = "655224318891917345"
var announcements = "655235269783715872"
var mchallowbotlog = "658411398484983828"
var joinlogs = "658408942422196256"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

client.on('ready',() => {
  console.log('MCHallow Bot Online')
  client.user.setActivity('Type -help for help!')
})
client.on('messageDelete', function(m){
  let ch = m.channel
	let guild = ch.guild
	guild.channels.get(mchallowbotlog).send({embed: {
	    color: 3447003,
	    author: {
	      name: m.author.username,
	      icon_url: m.author.avatarURL
	    },
	    title: "Message Deleted",
	    description: "**Message Deleted Logs**",
	    fields: [{
	        name: "Message",
	        value: ("Message: ***\"" + m + "\"***")
	      },
	      {
	        name: "Author",
	        value: ("Author: ***"+ m.author.username+"***")
	      },
	      {
	        name: "Channel",
	        value: ("Channel: "+ ch)
	      }
	    ],
	    timestamp: new Date(),
	    footer: {
	      icon_url: client.user.avatarURL,
	      text: "©MCHallow Bot Logs"
	    }
	  }
	});
})
//const swearWords = ["ahole","nigga","nigger","niglet","nig","fuk","penis","rape","queer","porn","retard","dike","kike","slut","whore","shit","fuck","damn","bitch","dick","pussy","fag","cock","asshole","faggot","fag","bastard","cunt","douche","fucker"];
//client.on('message',message =>{
 //if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
  // message.delete()
	 // message.author.send
  // }
//})

client.on('messageUpdate', function(oldm,newm){
	if(oldm.content === newm.content) return;
	if( swearWords.some(word => newm.content.toLowerCase().includes(word)) ) {
 newm.delete()

}
})
client.on('guildMemberAdd',member =>{
	let guild = member.guild;
	guild.channels.get(joinlogs).send(`Welcome, ${member.user.username} to the MCHallow's Official Discord! Have a good time here! :wink:`)
})
client.on('guildMemberRemove',member =>{
	let guild = member.guild;
	guild.channels.get(joinlogs).send(`Well, ${member.user.username} just left the Discord.. :sob:`)
})

client.on('messageUpdate', function(oldm,newm){
	if(oldm.content === newm.content) return;
  let ch = oldm.channel
	let guild = oldm.guild
	guild.channels.get(mchallowbotlog).send({embed: {
	    color: 3447003,
	    author: {
	      name: oldm.author.username,
	      icon_url: oldm.author.avatarURL
	    },
	    title: "Message Edited",
	    description: "**Message Update Logs**",
	    fields: [{
	        name: "Old Message",
	        value: ("Old Message: ***\"" + oldm + "\"***")
	      },
				{
		        name: "New Message",
		        value: ("New Message: ***\"" + newm + "\"***")
		      },
	      {
	        name: "Author",
	        value: ("Author: ***"+ oldm.author.username+"***")
	      },
	      {
	        name: "Channel",
	        value: ("Channel: "+ ch)
	      }
	    ],
	    timestamp: new Date(),
	    footer: {
	      icon_url: client.user.avatarURL,
	      text: "© MCHallow Bot Logs"
	    }
	  }
	});
})



var prefix = "-"
client.on('message', message => {
    let args = message.content.split(' ');
    var argsresult = args.join(' ');

    if (!message.content.startsWith(prefix)) return;

    if (message.author.bot) return;
 //if (message.channel.id !== ("bot commands")) return
    if (message.channel.type === "dm"){
      message.channel.send("Please use MCHallow's Discord for commands")
      return
    };

    if(message.content.startsWith(prefix+'help')){
      message.reply("A DM has been sent to you for help!")
      message.author.send({embed: {
        color: 3447003,
        title: "Basic Commands",
        description: "All commands must begin with the prefix (-)",
        fields: [{
       name: "help",
       value: "Gives you this menu!"
     },
     {
       name: "urban",
       value: "Search your definition on the Urban Dictionary! -urban [definition]"

     },
     {
       name: "ping",
       value: "Pong!"

     },
     {
       name: "invite",
       value: "Gives you the invite code to the server!"

     }]
      }})
	  if(message.member.roles.find("name", "Administrator")){
      message.author.send({embed: {
        color: 3447003,
        title: "Moderation Commands",
        description: "All commands must begin with the prefix (-)",
        fields: [{
       name: "coming soon",
       value: "idk u guys are the admins u tell me what u wanna see here"
     }
]
      }

    })}
    }else

    if(message.content.startsWith(prefix+'upload')){
      if(message.member.roles.find("name", "mchallow")){
        if (args.length <=1) return
        message.delete()
      message.guild.channels.get(announcements).send("@everyone MCHallow uploaded a new video! Go check it out and give it a like and comment! " + args[1])
    }}else
    if(message.content.startsWith(prefix+'ping')) {
message.channel.send('Pinging!').then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`) );
    } else
	if(message.content.startsWith(prefix + 'urban')){
		let question = args[1];
		if(!question) return message.channel.send("You must provide something to search!")
		message.reply("The definition for, " + args[1] + ' is this: http://www.urbandictionary.com/define.php?term='+ args[1])
} else
  if(message.content.startsWith(prefix+'invite')){
    message.reply("The Discord invite code is: https://discord.gg/hZxnXse")
  }
  if(message.content.startsWith(prefix+'say')){
    if(message.member.roles.find("name", "mchallow")){
      if (args.length <=1) return
      message.delete()
    message.guild.channels.get("655224318891917345").send(argsresult.slice(4))
  }
}
  //if(message.content.startsWith(prefix+'spam')){
   // message.guild.members.get("id").send("MSG")
 //}


});


client.login(process.env.BOT_TOKEN)
