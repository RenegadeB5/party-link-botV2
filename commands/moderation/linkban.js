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
		msg.member.addRole(banrole);
		console.log(user);
	}
}
exports.help = {
	name: "linkban"
}
