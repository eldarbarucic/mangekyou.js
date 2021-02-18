const Discord = require('discord.js'); //damit holen wir uns Dicord.js in unseres Dokument

const client = new Discord.Client; //wir legen fest, dass eine neue Discord Application (=Discord Client) mit "client" abgerufen werden kann. Ihr könnt auch bot oder sonst was nehmen, client ist aber am einfachsten.

client.on('ready', () => {

    console.log('I am ready!');
    
    });

    client.login("ODExOTIzMTQ1NjEwMzYyODkw.YC5QWg.40-aLN9OR0rmVQmt9LDmTGY8CAM")


    client.on('message', message => {

        if(message.content.toLowerCase() == '!ping'){

            message.channel.send('Pong!');
            
            };    

    });
    
      