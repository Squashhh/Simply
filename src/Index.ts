import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config'

export const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds
	] 
});

client.login(process.env.TOKEN);