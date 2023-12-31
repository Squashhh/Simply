import { Client } from 'discord.js';
import fs from 'node:fs';
import path from 'node:path';

export function loadEvents(client : Client) : void {

	const eventsPath = path.join(__dirname, '../events');
	const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.ts'));

	let  eventsLoadedCounter = 0;

	for (const file of eventFiles) {
		const filePath = path.join(eventsPath, file);
		const event = require(filePath);
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		} else {
			client.on(event.name, (...args) => event.execute(...args));
		}
		eventsLoadedCounter += 1
	}

	console.log(`🚀 ${eventsLoadedCounter} successfully loaded events.`);

}