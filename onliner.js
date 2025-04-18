const { Client } = require('discord.js-selfbot-v13');

const TOKEN = 'DISCORD_TOKEN_HERE';

const client = new Client({
    checkUpdate: false,
});

client.once('ready', () => {
    // CHANGE FROM online TO idle OR dnd IF YOU WANT. 
    client.user.setStatus('online');
    console.log(`Logged in as ${client.user.tag} and set status to idle.`);
    
    console.log('WARNING: Using user accounts with selfbots is against Discord\'s Terms of Service.');
    console.log('Use at your own risk. This script is for educational purposes only.');
});

client.login(TOKEN);
