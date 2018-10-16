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
		if(!msg.member.roles.has(banrole.id)) return msg.channel.send("The specified user isnt linkbanned.").then(message => {message.delete(5000)});
		msg.mentions.members.first().removeRole(banrole).then(msg.mentions.members.first().send('Your access to member-links has been restored'));
		msg.delete();
	}
}
exports.help = {
	name: "linkunban"
}
