import { Events, Invite } from 'discord.js';

export default {
	name: Events.InviteCreate,
	once: false,
	execute(invite: Invite) {
		console.log(`✅ The ${invite.code} invitation has just been created by ${invite.inviter?.username} for the ${invite.channel?.name} show, and expires on ${invite.expiresAt?.getDate} `);
	},
};