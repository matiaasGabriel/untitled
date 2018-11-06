const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");
const { Client, Attachment } = require('discord.js');
const talkedRecently = new Set();
const onlineput = new Set();
const fs = require("fs")
var query = require('samp-query')
SERVER_IP = [process.env.SERVERIP]
REPORTARLINK = [process.env.REPORTARLINK]
var options = {
    host: `${SERVER_IP}`
}

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
  console. log(`BOT FUNCIONANDO`);
  client.user.setActivity(`${SERVER_IP} | !help`);
  var interval = setInterval (function () {
if (onlineput.has()) {
    } else {
    client.user.setStatus("online");
    query(options, function (error, response) {
    if(error)
        console.log(error)
    else 
        client.channels.get("504745609287303183").edit({ name: `🤖-ℙlayer▸${response.online}`})
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
  "description": ":speech_left: :bust_in_silhouette: **__BIENVENIDO AL SERVIDOR!__**\n\nAh, hola, soy el bot a cargo del **__Servidor__**!\nSupongo que eres el nuevo miembro.\nContinuaré diciéndote lo que se necesita para permanecer en el **__DISCORD DEL SERVIDOR__**.\n\n➤ ``Está prohibido insultar o faltar el respeto.``\n\n➤ ``Está prohibido realizar SPAM masivo.``\n\n➤ ``El canal #general  es para hablar sobre cosas relacionadas con el servidor, para hablar de cosas que no estén relacionadas con el servidor H-RP se usa #off-topic``\n\n➤ ``No se atienden reportes por Discord, solo en el foro.``\n\nRESPETAR ESTAS REGLAS PARA PODER PERMANECER EN EL DISCORD DEL SERVIDOR!.\n\n **__DISFRUTAR DEL SERVIDOR Y RECUERDA USAR ``!help`` SI TIENES ALGUNA DUDA.__**",
  "color": 16098851
};
member.send({ embed });   
   client.channels.get("506202099575554056").send(`${member.user} Ingresando al servidor.`)
});

client.on("guildMemberRemove", member => 
{
client.channels.get("506202099575554056").send(`${member.user} Saliendo del servidor.`)
});


client.on("message", async message => 
{
if(message.author.bot) return;

if (message.channel.type === "dm") return;
  if (message.channel.id === "504748185533808661") {
    if(message.attachments.size <= 0) {
       message.delete()
       message.channel.send(`${message.author}, Solo fotos.`).then(sentMessage => {
       sentMessage.delete(2000);
    }); 
  }
}

if (message.channel.id === "504827352509972481") {

if(message.attachments.size <= 0) {
        const embed = {
  "description": `**__${message.author} Ha hecho una sugerencia sin imagen.\n\n(CONTENIDO):__**\n${message.content}`,
  "color": 16743680
};
    client.channels.get("506202099575554056").send({ embed });
    client.users.get(`${message.author.id}`).send(`Sugerencia enviada.`).then(EliminarMensaje => {
    message.delete(1000);
  })
}

if(message.attachments.size <= 1) {
      var Attachment = (message.attachments).array();
      Attachment.forEach(function(attachment) {
        const embed = {
  "description": `**__${message.author} Ha hecho una sugerencia con imagen.\n\n(CONTENIDO):__**\n${message.content}\n**__(FOTOS):__**`,
  "color": 16743680,
  "image": {
    "url": `${attachment.url}`
  }
};
      client.channels.get("506202099575554056").send({ embed });
      client.users.get(`${message.author.id}`).send(`Sugerencia con imagen enviada.`).then(EliminarMensaje => {
      message.delete(1000);
      })
    });
  }
}

if (message.channel.id === "509144448811401227") {
    message.react(client.emojis.get("476847482719174657"))
    message.react(client.emojis.get("488775516397109258"))
    message.react(client.emojis.get("488774156133990412"))
    message.react(client.emojis.get("488765926460882964"))
    message.react(client.emojis.get("488774449412177920"))
    message.react(client.emojis.get("492075758089535488"))  
}

if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
if (message.content.match(/Serv/i)) {
  query(options, function (error, response) {
    if(error)
        console.log(error)
    else 
        message.channel.send(`Oh. por supuesto, el servidor tiene ${response.online} jugadores online y su ip es: ${SERVER_IP}`).then(sentMessage => {
      sentMessage.delete(1000);
    })
})
  }
if (message.content.match(/Reporte/i)) {
   message.channel.send(`¿Quieres reportar? Ve: ${REPORTARLINK}.`);
}
if (message.content.match(/Reporta/i)) {
   message.channel.send(`¿Quieres reportar? Ve: ${REPORTARLINK}.`);
}
if (message.content.match(/Ayuda/i)) {
   message.channel.send("¿Que necesitas?");
}
if (message.content.match(/Samphub/i)) {
   if(!message.member.roles.some(r=>["Administrador", "Moderador"].includes(r.name)) ) return
   message.delete()
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}
if (message.content.match(/Champu/i)) {
   message.delete()
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}
if (message.content.match(/PornHub/i)) {
   message.delete()
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}
if (message.content.match(/Ayuda/i)) {
   message.delete()
   message.reply("Calmate.");
}
if (message.content.match(/Viva Ndrangheta/i)) {
   message.channel.send("¡VIVA!");
}
if (message.content.match(/Hdp/i)) {
   message.delete()
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}
if (message.content.match(/Puto/i)) {
   message.delete() 
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}
if (message.content.match(/Puta/i)) {
   message.delete()
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}
if (message.content.match(/Mierda/i)) {
   if(!message.member.roles.some(r=>["Administrador", "Moderador"].includes(r.name)) ) return
   message.delete() 
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}
if (message.content.match(/Pto/i)) {
   message.delete() 
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}
if (message.content.match(/mmgvo/i)) {
   message.delete() 
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}
if (message.content.match(/Pta/i)) {
   message.delete() 
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}
if (message.content.match(/qlo/i)) {
   message.delete() 
   message.reply("Calmate.").then(sentMessage => {
  sentMessage.delete(2000);
  });
}

if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


if(command === "create") {
var server = message.guild;
var chatname1 = `${message.author.username}`.toLowerCase();
var chatname2 = `${chatname1}`.replace(/ /g,"");
var chatname3 = `${chatname2}`.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "");
var finalchatname = `${chatname3}`; 
var voicename = `${message.author.username}`;
message.delete()

if (message.guild.channels.exists('name', `💭▸chat-${finalchatname}`)) {
    client.users.get(`${message.author.id}`).send(`Tu canal chat ya está creado por lo cual no se creará nuevamente.`);
    console.log(`${finalchatname} no else de chat`)
    } else {
    console.log(`${finalchatname} else de chat`)
server.createChannel(`💭▸chat-${finalchatname}`, 'text').then( // CREAR CANAL TEXTO.  
    (chan1) => {// DESPUES DE CREAR EL CANAL VAMOS A MOVERLO A LA CATEGORIA. Y ENVIAMOS EL MENSAJE INFORMANDOLO.
        chan1.setParent("505044934009815040").then( // MOVER CANAL
            (chan2) => {
                  chan2.overwritePermissions(message.guild.roles.find('name', '@everyone'), { // PARA QUE EVERYONE NO VEA EL CANAL
                     'READ_MESSAGES' : false
                  });
                  chan2.overwritePermissions(message.author.id,  { // DARLE PERMISOS AL USUARIO
                  'MANAGE_PERMISSIONS': true, 'MANAGE_CHANNELS': true,
                  'READ_MESSAGES': true
                  }); // SI ES EL DUEÑO...
                  console.log("CANAL TEXTO CREADO");
                }
             
            )
          }
        )
    }


if (message.guild.channels.exists('name', `🔊▸voz-${voicename}`)) { // ¿EL CANAL VOZ EXISTE?
    console.log(`${voicename} no else de voz`)
    client.users.get(`${message.author.id}`).send(`Tu canal voz ya está creado por lo cual no se creará nuevamente.`);
    } else {
    console.log(`${voicename} else de voz`)
server.createChannel(`🔊▸voz-${voicename}`, 'voice').then(// CREAR EL CANAL AUDIO
    (chan3) => {
        chan3.setParent("505044934009815040").then( // MOVER CANAL.
            (chan4) => {
                  chan4.overwritePermissions(message.guild.roles.find('name', '@everyone'), { // EVERYONE NO PUEDE
                     'CREATE_INSTANT_INVITE' : false,        'VIEW_CHANNEL': false,
                     'CONNECT': false,                       'SPEAK': false
                  });
                  chan4.overwritePermissions(message.author.id,  { // USUARIO PUEDE
                  'MANAGE_PERMISSIONS':true,              'MANAGE_CHANNELS': true,
                  'VIEW_CHANNEL': true,                   'CONNECT': true,            
                  'SPEAK': true
                  });
                  console.log("CANAL VOZ CREADO");// INFORMAR CANAL TERMINADO
                } 
            
            )
          }
        )
    }
}

if(command === "dar") {
var chatname1 = `${message.author.username}`.toLowerCase();
var chatname2 = `${chatname1}`.replace(/ /g,"");
var chatname3 = `${chatname2}`.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\_\-\&])/g, "");
var finalchatname = `${chatname3}`; 

var voicename = `${message.author.username}`;

const ctoe = client.channels.find("name", `🔊▸voz-${voicename}`)
const ctoe2 = client.channels.find("name", `💭▸chat-${finalchatname}`)
message.delete();

let member = message.mentions.members.first();
    if(!member) return client.users.get(`${message.author.id}`).send("Tenes que mencionar un miembro válido de este servidor")

if (message.guild.channels.exists('name', `🔊▸voz-${voicename}`)) { 
      ctoe.overwritePermissions(member.user.id,  {
                  'MANAGE_PERMISSIONS':false,              'MANAGE_CHANNELS': false,
                  'VIEW_CHANNEL': true,                   'CONNECT': true,            
                  'SPEAK': true
    });
  client.users.get(`${message.author.id}`).send(`Hecho. Ahora ${member} Puede conectarse a tu canal **AUDIO**, **USAR** !quitar [@usuario] en el canal <#505138561188888577>.`);
  } else {
  client.users.get(`${message.author.id}`).send(`No tienes canal **AUDIO** usa !create para obtener tu canal **AUDIO**`)
  }


if (message.guild.channels.exists('name', `💭▸chat-${finalchatname}`)) {
      ctoe2.overwritePermissions(member.user.id,  {
                  'MANAGE_PERMISSIONS': false, 'MANAGE_CHANNELS': false,
                  'READ_MESSAGES': true
    });
    client.users.get(`${message.author.id}`).send(`Hecho. Ahora ${member} Puede leer y enviar mensajes a tu canal **TEXTO**, **USAR** !quitar [@usuario] en el canal <#505138561188888577>.`);
} else {
  client.users.get(`${message.author.id}`).send(`No tienes canal **TEXTO** usa !create para obtener tu canal **TEXTO**`)
}
}

if(command === "quitar") {
var chatname1 = `${message.author.username}`.toLowerCase();
var chatname2 = `${chatname1}`.replace(/ /g,"");
var chatname3 = `${chatname2}`.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "");
var finalchatname = `${chatname3}`; 

var voicename = `${message.author.username}`;

const ctoe = client.channels.find("name", `🔊▸voz-${voicename}`)
const ctoe2 = client.channels.find("name", `💭▸chat-${finalchatname}`)
message.delete()

let member = message.mentions.members.first();
    if(!member) return client.users.get(`${message.author.id}`).send("Tenes que mencionar un miembro válido de este servidor")

if (message.guild.channels.exists('name', `🔊▸voz-${voicename}`)) { 
      ctoe.overwritePermissions(member.user.id,  {
                  'MANAGE_PERMISSIONS':false,              'MANAGE_CHANNELS': false,
                  'VIEW_CHANNEL': false,                   'CONNECT': false,            
                  'SPEAK': false
    });
  client.users.get(`${message.author.id}`).send(`Hecho. Ahora ${member} **NO** puede conectarse a tu canal **AUDIO**, **USAR** !quitar [@usuario] en el canal <#505138561188888577>.`);
  } else {
  client.users.get(`${message.author.id}`).send(`No tienes canal **AUDIO** usa !create para obtener tu canal **AUDIO**`)
  }


if (message.guild.channels.exists('name', `💭▸chat-${finalchatname}`)) {
      ctoe2.overwritePermissions(member.user.id,  {
                  'MANAGE_PERMISSIONS': false, 'MANAGE_CHANNELS': false,
                  'READ_MESSAGES': false
    });
    client.users.get(`${message.author.id}`).send(`Hecho. Ahora ${member} **NO** puede leer y enviar mensajes a tu canal **TEXTO**, **USAR** !quitar [@usuario] en el canal <#505138561188888577>.`);
} else {
  client.users.get(`${message.author.id}`).send(`No tienes canal **TEXTO** usa !create para obtener tu canal **TEXTO**`)
}
}

  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }


  if(command === "help") {
const embed = {
  "description": ":robot: **__LISTA DE COMANDOS:__**\n\n`!ping` = __**Nivel de latencia**__\n`!create` = __**Crea un canal privado sin limite.**__\n`!dar` = __**Das permisos a un usuario a conectarse o leer tus canales privados.**__\n!quitar = __**Quitar permisos a un usuario a conectarse o leer tus canales privados**__\n-----------------------------\n`!do` **(Texto Ambiente)**\n`!me` **(Texto Acción)**\n`!b` **(texto OOC)**\n`!s` **(texto DICE)**\n\n<a:fidget_spinner:488765926460882964> **__LISTA DE GIF:__**\n\n`fidget_spinner` = <a:fidget_spinner:488765926460882964>\n`PandaPingRee` = <a:PandaPingRee:488774156133990412>\n`fidthink` = <a:fidthink:488774120822145055>\n`CdCard` = <a:CdCard:488774449412177920>\n`alert` = <a:alert:488775516397109258>\n`gordo` =<a:gordo:488775536730963969>\n`boy1` = <a:boy1:488774159812526091>\n`boy2` = <a:boy2:488774136240275466>\n`boy3` = <a:noy3:488774134298312704>\n`boy4` = <a:boy4:488774159321661471>\n`boy5` = <a:boy5:488774154791682059>\n`boy6` = <a:boy6:488774134210363404>\n`boy7` = <a:boy7:488774164380123185>\n\n¿No tienes nitro? solo di el nombre y te envío el gif por ti. :wink:\n Si tiene alguna duda o sugerencia, comuníquese con <@389526841062588416>.\n\n**__TU ID:__** " + message.author.id,
  "color": 16098851
};
message.delete()
client.users.get(`${message.author.id}`).send(`${message.author}`, { embed });

  }
  if(command === "say") {
	if(!message.member.roles.some(r=>["Administrador", "Moderador"].includes(r.name)) )
      return

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
   }


  if(command === "pong") {
  if(!message.member.roles.some(r=>["Administrador", "Moderador"].includes(r.name)) )
      return
    message.delete()
    const m = await message.channel.send("@everyone");
    m.edit(`pong GG :ping_pong:`);
}

if(command === "ip") {
  message.delete()
  query(options, function (error, response) {
    if(error)
        console.log(error)
    else 
        message.channel.send(`La ip del servidor es ${SERVER_IP} y tiene ${response.online} usuarios conectados.`).then(sentMessage => {
   sentMessage.delete(2000);
  })
})
}

if(command === "do") {
  let doo = args.join(" ");
  message.delete()
  if(!doo) return message.reply("!do (texto)").then(dome => {
  dome.delete(2000);
  })
  message.channel.send(`<@&505922890483367956> * ${message.author} (( ${doo} ))`)
}

if(command === "me") {
  let me = args.join(" ");
  message.delete()
  if(!me) return message.reply("!me (texto)").then(meme => {
  meme.delete(2000);
  })
  message.channel.send(`<@&505922889363750913> * ${message.author} ${me}`);
}

if(command === "b") {
  let b = args.join(" ");
  message.delete()
  if(!b) return message.reply("!b (texto)").then(bme => {
  bme.delete(2000);
  })
  message.channel.send(`<@&505923186739904522> ID: Nonid | ${message.author}: (( ${b} ))`);
}


  if(command === "s") {
    let dice = args.join(" ");
    message.delete()
    if(!dice) return message.reply("!s (texto)").then(sme => {
    sme.delete(2000);
    })
    message.channel.send(`${message.author} <@&505922891099930634> ${dice}`);
} 
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrador", "Moderador"].includes(r.name)) )
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
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/480084489771417600/489101173304066049/596bd0f8541debff8d44326e840ea085.png"
  }
};  
    client.channels.get("506202099575554056").send({ embed })
    member.send({ embed })
    message.reply(`GG el ha recibido expulsión.`);
}
  
  if(command === "ban") {
    if(!message.member.roles.some(r=>["Administrador", "Temporal"].includes(r.name)) )
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
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/480084489771417600/489101173304066049/596bd0f8541debff8d44326e840ea085.png"
  }
};  
    client.channels.get("506202099575554056").send({ embed })
    member.send({ embed })
    message.reply(`Uy. Ha recibido ban permanentemente GG`);
}
  if(command === "clear") {  
    if(!message.member.roles.some(r=>["Administrador", "Temporal"].includes(r.name)) )
    return message.channel.sendMessage('¿Eliminar chat? jaja');

    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 100) 
      return message.reply("Decime un número entre 2 y 100 para la cantidad de mensaje a eliminar.");

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    
    message.delete()
    message.channel.bulkDelete(fetched) 
    .then((fetched) => {
        client.channels.get("506202099575554056").send(`${message.author}, Se han eliminado ${deleteCount} mensajes en el canal ${message.channel}.`);
    })
    .catch((error) => {
        client.channels.get("506202099575554056").send(`${message.author} No pude eliminar mensajes porque: ${error}`);
    })
}
});
client.login(process.env.BOT_TOKEN);
