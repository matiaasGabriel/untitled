const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");
const { Client, Attachment } = require('discord.js');
const talkedRecently = new Set();
const onlineput = new Set();
const fs = require("fs")
var query = require('samp-query')
var options = {
    host: '192.99.135.246'
}
WHERE = [process.env.BOT_WHERE]
BOT_LINK = [process.env.BOT_WHERE]
const responseObject = {
  "fidget_spinner": `<a:fidget_spinner:488765926460882964>`,
  "fidthink": `<a:fidthink:488774120822145055>`,
  "boy6": `<a:boy6:488774134210363404>`,
  "boy3": `<a:noy3:488774134298312704>`,
  "boy2": `<a:boy2:488774136240275466>`,
  "boy5": `<a:boy5:488774154791682059>`,
  "PandaPingRee": `<a:PandaPingRee:488774156133990412>`,
  "boy4": `<a:boy4:488774159321661471>`,
  "boy1": `<a:boy1:488774159812526091>`,
  "boy7": `<a:boy7:488774164380123185>`,
  "CdCard": `<a:CdCard:488774449412177920>`,
  "alert": `<a:alert:488775516397109258>`,
  "gordo": `<a:gordo:488775536730963969>`
};

client.on("ready", () => 
{
  console. log(process.env.BOT_LOG);
  client.user.setActivity(process.env.BOT_PLAYING);
  var interval = setInterval (function () {
if (onlineput.has()) {
    } else {
    client.user.setStatus("online");
    query(options, function (error, response) {
    if(error) return
    else
        client.channels.get("493348597836808202").edit({ name: `🤖-ℙlayer▸ ${response.online}`})
})
  }
    onlineput.add();
        setTimeout(() => {
        client.user.setStatus("dnd"); 
        onlineput.delete();
    }, 2000);
        }, 1 * 4000); 
});

client.on('guildMemberAdd', member => 
{
const embed = {
  "description": `:speech_left: :bust_in_silhouette: **__BIENVENIDO A ${WHERE}!__**\n\nAh, hola, soy el bot a cargo de la banda!\nSupongo que eres el nuevo miembro.\nContinuaré diciéndote lo que se necesita para permanecer en la banda.\n\n**➤ Importante: Ser activo, No Antirol y respeto a todos.\n➤ Rellena lo siguiente en el canal <#476844038088294420> para poder ver los todos los canales del servidor discord @${WHERE}.**\n\n`♝ Nick:\n♝ Rango:\n♝ Rol: Bajo/Medio/Alto`\n\n:speaking_head: __**Simplemente eso, \nGracias por unirse a ${WHERE} esperamos que se divierta mucho.**__`,
  "color": 16743680,
  "timestamp": "2018-09-11T22:35:04.173Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/480084489771417600/489167278647148565/logo.jpg",
    "text": `${WHERE} bot. by Alice`
  },
  "image": {
    "url": `${BOT_LINK}`
  },
  "author": {
    "name": "! Alice ★",
    "url": "https://discordapp.com/channels/@me/402612675982524426",
    "icon_url": "https://cdn.discordapp.com/avatars/389526841062588416/5008341da3548acccd1a55348614f15f.png"
  },
  "fields": []
};
member.send({ embed });   
   member.addRoles(['476532548416045077', '476861498954612764'])
   client.channels.get("476857925613387787").send(`${member.user} Ingresando al servidor.\n@everyone`)
   //console.log(`${member.user.username} Ingresando al servidor.`);
});

client.on("guildMemberRemove", (member) => 
{
   client.channels.get("476857925613387787").send(`${member.user} Saliendo del servidor.`)
   //console.log(`${member.user.username} Saliendo del servidor.`);
});

client.on("message", async message => 
{
if(message.author.bot) return;

  if (message.channel.type === "dm") {
    if (message.author.id === config.BlacklistedID) return message.reply("No puedo servirte, estás prohibido.").then(message.delete())      
             if (talkedRecently.has(message.author.id)) {
            message.reply(`Tranquilo! Podrás reportar después de haber pasado 3 minutos.`);
    } else {
      if(message.attachments.size <= 0) {
      RUserID = [`${message.author.id}`]
      const embed = {
  "description": `\n:robot: __**BOT DICE:\n**__ESTE REPORTE ES INVÁLIDO DESPUÉS DE HABER RECIBIDO OTRO.\n\n:speech_left: ${message.author} __**DICE:**__\n${message.content}\n\n__**ID:**__\n${message.author.id}`,
  "color": 16743680,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/480084489771417600/489101173304066049/596bd0f8541debff8d44326e840ea085.png",
    "text": `SISTEMA DE REPORTES • ${message.createdAt}`
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/480084489771417600/489103878701449216/Ndrangheta_gif_1.gif"
  },
  "author": {
    "name": `${message.author.username}`,
    "icon_url": `${message.author.avatarURL}`
  },
  "fields": []
};
      message.react(client.emojis.get("488765926460882964"))
      client.channels.get("476857925613387787").send("Ping Pong @everyone hemos recibido un nuevo reporte.", { embed });
      }
   if(message.attachments.size <= 1) {
      var Attachment = (message.attachments).array();
      Attachment.forEach(function(attachment) {
      RUserID = [`${message.author.id}`]
        const embed = {
  "description": `\n:robot: __**BOT DICE:\n**__ESTE REPORTE ES INVÁLIDO DESPUÉS DE HABER RECIBIDO OTRO.\n\n:speech_left: ${message.author} __**DICE:**__\n${message.content}\n\n__**ID:**__\n${message.author.id}\n\n:gem: **__FOTOS:__**`,
  "color": 16743680,
  "timestamp": "2018-09-11T15:44:16.153Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/480084489771417600/489101173304066049/596bd0f8541debff8d44326e840ea085.png",
    "text": `SISTEMA DE REPORTES • ${message.createdAt}`
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/480084489771417600/489103878701449216/Ndrangheta_gif_1.gif"
  },
  "image": {
    "url": `${attachment.url}`
  },
  "author": {
    "name": `${message.author.username}`,
    "icon_url": `${message.author.avatarURL}`
  },
  "fields": []
};
      client.channels.get("476857925613387787").send("Ping Pong @everyone hemos recibido un nuevo reporte.", { embed });
      message.react(client.emojis.get("488765926460882964"))
    });
      talkedRecently.add(message.author.id);
        setTimeout(() => {
          message.reply("Ya puedes enviar otro reporte.")
          talkedRecently.delete(message.author.id);
        }, 180000);
    }
  }
}

if (message.channel.type === "dm") return;
   if (message.channel.id === "476777439415107586") {
    if(message.attachments.size <= 0) {
       message.delete()
       message.channel.send(`${message.author}, Solo fotos.`).then(sentMessage => {
       sentMessage.delete(2000);
    }); 
    }
}
if (message.channel.id === "476777384725708801") {
    message.react(client.emojis.get("476847482719174657"))
    message.react(client.emojis.get("488775516397109258"))
    message.react(client.emojis.get("488774156133990412"))
    message.react(client.emojis.get("488765926460882964"))
    message.react(client.emojis.get("488774449412177920"))
    message.react(client.emojis.get("492075758089535488"))
	/* Random */
}

if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
  if (message.content.match(/Ndrangheta-Bot/i)) {
    message.channel.send("Sí, dime ¿que necesitas? Puedo recibir reportes por mensaje privado y tengo una variedad de comandos útiles. usa !help");
  }
  if (message.content.match(/Serv/i)) {
  query(options, function (error, response) {
    if(error)
        message.delete()
    else 
        message.channel.send(`Oh. por supuesto, el servidor tiene ${response.online} jugadores online y su ip es: samp.super-rp.xyz`);
})
  }
  if (message.content.match(/Ndrangheta/i)) {
    const attachment = new Attachment('https://i.imgur.com/QJ9Yhvn.jpg');
    message.channel.send(attachment);
  }
if (message.content.match(/Conquista/i)) {
   message.channel.send("Alguien dijo conquista? Soy muy bueno en eso.");
}
if (message.content.match(/Reporte/i)) {
   message.channel.send("¿Quieres reportar? Envíame un mensaje y informo.");
}
if (message.content.match(/Reporta/i)) {
   message.channel.send("¿Quieres reportar? Envíame un mensaje y informo.");
}
if (message.content.match(/Ayuda/i)) {
   message.channel.send("¿Que necesitas?");
}
if (message.content.match(/Viva Ndrangheta/i)) {
   message.channel.send("¡VIVA!");
}
if (message.content.match(/Hdp/i)) {
   message.delete()
   message.reply("Calmate.");
}
if (message.content.match(/Puto/i)) {
   message.delete() 
   message.reply("Calmate.");
}
if (message.content.match(/Puta/i)) {
   message.delete()
   message.reply("Calmate.");
}
if (message.content.match(/Mierda/i)) {
   message.delete() 
   message.reply("Calmate.");
}

if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "rdm") {
    if(!message.member.roles.some(r=>["Administrador-bot", "Moderador-bot"].includes(r.name)) )
      return message.channel.sendMessage('No tenes permisos para utilizar este comando.');
    const RMessage = args.join(" ");
    client.users.get(`${RUserID}`).send(`__**Respuesta recibida del administrador: ${message.author}**__\n\n${RMessage}`);
    message.reply(`Mensaje enviado correctamente a <@${RUserID}>\n\n**__(Respuesta)__**\n ${RMessage}`);
  }
if(command === "as" {
	message.reply(`${WHERE}`)
}
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if(command === "help") {
    const embed = {
  "description": ":robot: **__LISTA DE COMANDOS:__**\n\n`!ping` = __**Nivel de latencia**__\n-----------------------------\n`!do` **(Texto Ambiente)**\n`!me` **(Texto Acción)**\n`!b` **(texto OOC)**\n`!r`**(Texto Radio)**\n\n<a:fidget_spinner:488765926460882964> **__LISTA DE GIF:__**\n\n`fidget_spinner` = <a:fidget_spinner:488765926460882964>\n`PandaPingRee` = <a:PandaPingRee:488774156133990412>\n`fidthink` = <a:fidthink:488774120822145055>\n`CdCard` = <a:CdCard:488774449412177920>\n`alert` = <a:alert:488775516397109258>\n`gordo` =<a:gordo:488775536730963969>\n`boy1` = <a:boy1:488774159812526091>\n`boy2` = <a:boy2:488774136240275466>\n`boy3` = <a:noy3:488774134298312704>\n`boy4` = <a:boy4:488774159321661471>\n`boy5` = <a:boy5:488774154791682059>\n`boy6` = <a:boy6:488774134210363404>\n`boy7` = <a:boy7:488774164380123185>\n\n¿No tienes nitro? solo di el nombre y te envío el gif por ti. :wink:\n Si tiene alguna duda o sugerencia, comuníquese con <@389526841062588416>.",
  "color": 16743680,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/480084489771417600/489167278647148565/logo.jpg",
    "text": `'Ndrangheta bot. by Alice • ${message.createdAt}`
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/480084489771417600/489103878701449216/Ndrangheta_gif_1.gif"
  },
  "image": {
    "url": `${message.author.avatarURL}`
  },
  "author": {
    "name": "! Alice ★",
    "url": "https://discordapp.com/channels/@me/402612675982524426",
    "icon_url": "https://cdn.discordapp.com/avatars/389526841062588416/5008341da3548acccd1a55348614f15f.png"
  },
  "fields": [
    {
      "name": "**__USERID:__**",
      "value": `${message.author.id}`,
      "inline": true
    },
    {
      "name": "**__USER AVATAR:__**",
      "value": "--",
      "inline": true
    }
  ]
};
message.delete()
client.users.get(`${message.author.id}`).send(`${message.author}`, { embed });
  }
  if(command === "say") {
	if(!message.member.roles.some(r=>["Administrador-bot", "Moderador-bot"].includes(r.name)) )
      return
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  if(command === "pong") {
  if(!message.member.roles.some(r=>["Administrador-bot", "Moderador-bot"].includes(r.name)) )
      return
    message.delete()
    const m = await message.channel.send("@everyone");
    m.edit(`pong GG :ping_pong:`);
  }

if(command === "do") {
  let doo = args.join(" ");
  message.delete()
  if(!doo) return message.reply("!do (texto)").then(dome => {
  dome.delete(2000);
  })
  message.channel.send(`<@&476859219128221721> * ${message.author} (( ${doo} ))`)
}

if(command === "me") {
  let me = args.join(" ");
  message.delete()
  if(!me) return message.reply("!me (texto)").then(meme => {
  meme.delete(2000);
  })
  message.channel.send(`<@&476859224991858688> * ${message.author} ${me}`);
}

if(command === "b") {
  let b = args.join(" ");
  message.delete()
  if(!b) return message.reply("!b (texto)").then(bme => {
  bme.delete(2000);
  })
  message.channel.send(`<@&476859221950988298> ID: Nonid | ${message.author}: (( ${b} ))`);
}

if(command === "r") {
  let radio = args.join(" ");
  message.delete()
  if(!radio) return message.reply("!r (texto)").then(rme => {
  rme.delete(2000);
  })
  message.channel.send(`** <@&476861498954612764> ${message.author}: ${radio}`);
}

  if(command === "s") {
    let dice = args.join(" ");
    if(!dice) return message.reply("!s (texto)").then(sme => {
    sme.delete(2000);
    })
    message.channel.send(`${message.author} <@&476859116304728084> ${dice}`);
} 
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrador-bot", "Moderador-bot"].includes(r.name)) )
      return message.channel.sendMessage('No tienes permisos para utilizar este comando.');
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Tenes que mencionar un miembro válido de este servidor");
    if(!member.kickable) 
      return message.reply("No puedo expulsar este usuario! ¿Tiene un rango más alto? ¿Tengo permisos para expulsar?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Sin Razón";

    await member.kick(reason)
      .catch(error => client.channels.get("476857925613387787").send(`Hey ${message.author} No pude expulsar porque: ${error}`));
const embed = {
  "description": `:robot: **__SISTEMA DE ADMINISTRACIÓN.\n\n(USUARIO EXPULSADO)__**\n${member.user}(ID: ${member.user.id})\n\n**__(RAZÓN:)__**\n${reason}`,
  "color": 16743680,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/480084489771417600/489167278647148565/logo.jpg",
    "text": `SISTEMA DE ADMINISTRACIÓN • ${message.createdAt}`
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/480084489771417600/489101173304066049/596bd0f8541debff8d44326e840ea085.png"
  },
  "author": {
    "name": `${message.author.username}`,
    "icon_url": `${message.author.avatarURL}`
  },
  "fields": []
};  
    client.channels.get("476857925613387787").send({ embed })
    member.send({ embed })
    message.reply(`GG el ha recibido expulsión.`);
  }
  
  if(command === "ban") {
    if(!message.member.roles.some(r=>["Administrador-bot"].includes(r.name)) )
		return message.reply('No tienes permisos para utilizar este comando.');
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Mencionar un miembro válido de este servidor");
    if(!member.bannable) 
      return message.reply("No puedo prohibir este usuario! ¿Tiene un rango más alto? ¿Tengo permisos de prohibición?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Sin Razón.";
    
    await member.ban(reason)
      .catch(error => message.reply(`Hey ${message.author}, No pude prohibir porque: ${error}`));
const embed = {
  "description": `:robot: **__SISTEMA DE ADMINISTRACIÓN.\n\n(USUARIO PROHÍBIDO)__**\n${member.user}(ID: ${member.user.id})\n\n**__(RAZÓN:)__**\n${reason}`,
  "color": 16743680,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/480084489771417600/489167278647148565/logo.jpg",
    "text": `SISTEMA DE ADMINISTRACIÓN • ${message.createdAt}`
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/480084489771417600/489101173304066049/596bd0f8541debff8d44326e840ea085.png"
  },
  "author": {
    "name": `${message.author.username}`,
    "icon_url": `${message.author.avatarURL}`
  },
  "fields": []
};  
    client.channels.get("476857925613387787").send({ embed })
    member.send({ embed })
    message.reply(`Uy. Ha recibido ban permanentemente GG`);
  }
  if(command === "dmto") {
    if(!message.member.roles.some(r=>["Administrador-bot"].includes(r.name)) )
      return message.channel.sendMessage('No tenes permisos para utilizar este comando.');
    
    let UserToDmID = args[0];
    let RMessage = args.slice(1).join(' ');

    message.delete()
    client.users.get(`${UserToDmID}`).send(`__**Respuesta recibida del administrador: ${message.author}**__\n\n${RMessage}`);
    client.channels.get("476857925613387787").send(`${message.author}, Mensaje enviado correctamente a <@${UserToDmID}>\n\n**__(Respuesta)__**\n ${RMessage}`);
  }
  if(command === "clear") {  
    if(!message.member.roles.some(r=>["Administrador-bot"].includes(r.name)) )
    return message.channel.sendMessage('¿Eliminar chat? jaja');

    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 100) 
      return message.reply("Decime un número entre 2 y 100 para la cantidad de mensaje a eliminar.");

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    
    message.delete()
    message.channel.bulkDelete(fetched) 
    .then((fetched) => {
        client.channels.get("476857925613387787").send(`${message.author}, Se han eliminado ${deleteCount} mensajes en el canal ${message.channel}.`);
    })
    .catch((error) => {
        client.channels.get("476857925613387787").send(`${message.author} No pude eliminar mensajes porque: ${error}`);
    })
  }
});
client.login(process.env.BOT_TOKEN);
