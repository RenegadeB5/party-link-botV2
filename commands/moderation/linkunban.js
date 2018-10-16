var { Command } = require("discord.js-commando");
module.exports = class PingCommand extends Command { 
	constructor(client) {super(client, {
		name: "linkunban",
		group: "moderation",
		description: "Prevents a user from accessing member-links.",
		memberName: "linkunban",
		args: [
 			{
				key: 'user',
				prompt: 'The user to un-linkban',
				type: 'user'
			}
		]
	});
						}

	async run(msg,user) {
		let banrole = msg.guild.roles.get('501861061364940800');
		if(!msg.member.roles.has(banrole.id)) return msg.channel.send("The specified user isnt linkbanned.");
		msg.member.removeRole(banrole).then(user.send('Your access to member-links has been restored'));
	}
}
exports.help = {
	name: "linkunban"
}
