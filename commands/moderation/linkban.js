var { Command } = require("discord.js-commando");
module.exports = class PingCommand extends Command { 
	constructor(client) {super(client, {
		name: "linkban",
		group: "moderation",
		description: "Prevents a user from accessing member-links.",
		memberName: "linkban",
		args: [
 			{
				key: 'user',
				prompt: 'The user to linkban.',
				type: 'user'
			}
		]
	});
						}

	async run(msg,user) {
		let banrole = msg.guild.roles.get('501861061364940800');
		if(msg.member.roles.has(banrole.id)) return msg.channel.send("The specified user is already linkbanned!");
		msg.member.addRole(banrole).then(msg.mentions.members.first().send('You have been banned from accessing member-links! The only way the punishment will be lifted is if you sincerely apologize to a staff member.'));
	}
}
exports.help = {
	name: "linkban"
}
