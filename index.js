    const { Client, MessageEmbed, Channel } = require('discord.js')
    const bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] })
    const util = require('minecraft-server-util')
    const utilTwo = require('minecraft-motd-util')
    const PREFIX = '&'

    const token = '<insert bot token here>';

    bot.on('ready', () => {
        console.log('This bot has been activated');
        // Updates the amount of players being watched by the bot in a 5000ms window.
        setInterval(() => {
            try {
                util.status('ds.69.mu', 25565).then((response) => {
                    bot.user.setActivity(response.players.online + ' players online', { type: "WATCHING" })
                }).catch((error) => {
                    console.log('There was an error in retrieving the status function')
                    return;
                })
            } catch (error) {
                console.log('There was an error in the interval function')
            }
        }, 5000)
    })

    // Turn bot off (destroy), then turn it back on
    function resetBot(channel) {
        // send channel a message that you're resetting bot [optional]
        channel.send('Resetting...')
            .then(msg => bot.destroy())
            .then(() => bot.login(token));
        channel.send('Bot has reset.')
    }


    bot.on('messageCreate', message => {

        let args = message.content.substring(PREFIX.length).split(' ')
            // Bot owner ID so it is not confused with other users
        let isBotOwner = message.author.id == '634463629856473118';

        switch (args[0].toLowerCase()) {
            // Below is the command.
            case 'reset':
                if (!isBotOwner) {
                    message.reply('You do not have permission for this command.');
                    return;
                }

                resetBot(message.channel);
                break;
                // ... other commands
                // Below is the command.
            case 'shutdown':
                if (!isBotOwner) {
                    message.reply('You do not have permission for this command.');
                    return;
                }

                message.channel.send('Shutting down...').then(m => {
                    bot.user.setActivity()
                    bot.destroy();
                });
                break;
                // Below is the command.
            case 'mcstats':
                let ip = 'ds.69.mu';
                let port = '25565';

                if (args.length === 1) {
                    message.reply('You must type a minecraft server ip. Type &mcstats <IP> <Port> like so.')
                    return;
                } else if (args.length === 2) {
                    ip = args[1];
                } else if (args.length === 3) {
                    ip = args[1];
                    port = args[2];
                }

                try {
                    util.status(ip, parseInt(port)).then((response) => {

                            const embed = new MessageEmbed()

                            .setColor('#FFA500')
                                .setTitle('Mc server status')
                                .setURL('https://passthemayo.gitbook.io/minecraft-server-util/')
                                .setAuthor({ name: 'Created by SpookyScooty#2964 and Future Unseen#6442' })
                                .setDescription('This embed provides the current stats for the IP and Port you\'ve entered into &mcstats.')
                                .setThumbnail('https://static.wikia.nocookie.net/hypixel-skyblock/images/e/e6/Site-logo.png/revision/latest?cb=20220103143211')
                                .addFields({ name: 'Current MOTD:', value: 'MOTD: ' + response.motd.clean }, { name: 'Online Players:', value: 'Players online right now: ' + response.players.online }, { name: 'Max Players:', value: 'Max amount of players allowed: ' + response.players.max }, { name: 'Version:', value: 'Current Version: ' + response.version.name })
                                //.addField('Inline field title', 'Some value here', true)
                                .setImage()
                                .setTimestamp()
                                .setFooter({ text: 'Created with the help of minecraft-server-util' })
                                // message.channel.send('Server IP ---> ' + response.hostIP + '\nVersion ---> ' + response.version.name + '\nPlayer count currently ---> ' + response.players.online + '\nMax Players ---> ' + response.players.max);
                            message.channel.send({ embeds: [embed] })
                        })
                        .catch((error) => {
                            message.reply('there was an error finding this server.\nYou must type a minecraft server ip. Type &mcstats <IP> <Port> like so.');
                            return;
                        })
                } catch (error) {
                    message.reply('there was an error finding this server.\nYou must type a minecraft server ip. Type &mcstats <IP> <Port> like so.');
                    return;
                }

                break;
        }
    })
    bot.login(token)