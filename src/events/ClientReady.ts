import { Events, Client } from 'discord.js';

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client: Client) {
		console.log(`✅ ${client.user?.username} is now ready. `);
		console.log(`📃 I am present on ${client.guilds.cache.size} server(s).`);
	},
};