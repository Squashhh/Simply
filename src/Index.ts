import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config'

import { loadEvents } from "#/handlers/EventsHandler";

export const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds
	] 
})

client.login(process.env.TOKEN);

client.on("ready", async client => {
	await loadEvents(client);

	console.log(`✅ ${client.user?.username} is now ready. `);
	console.log(`📃 I am present on ${client.guilds.cache.size} server(s).`);
})