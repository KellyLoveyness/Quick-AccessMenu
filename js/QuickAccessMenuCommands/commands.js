QuickAccessMenu.push({
	name: "commands", 
	alias: ["help"], 
	execute(argument) {
		var QuickAccessMenuCommandList = [];
		QuickAccessMenu.forEach((cmd) => {
			var QuickAccessMenuCommand = QuickAccessMenuPrefix + cmd.name;
			if (cmd.alias) {
				QuickAccessMenuCommand += ' (Alias: ';
				cmd.alias.forEach(a => QuickAccessMenuCommand += `${QuickAccessMenuPrefix}${a}, `);
				QuickAccessMenuCommand = QuickAccessMenuCommand.slice(0, -2);
				QuickAccessMenuCommand += ')';
			}
			QuickAccessMenuCommandList.push(QuickAccessMenuCommand);
		})
		ChatRoomMessage({ Content: "ChatRoomHelp", Type: "Action", Sender: Player.MemberNumber });
		ChatRoomMessage({ Content: `Quick-AccessMenu2.2: List of available commands:\n${QuickAccessMenuCommandList.join("\n")}`, Type: "LocalMessage", Sender: Player.MemberNumber })
	},
})

    ChatRoomMessage({ Content: "ChatRoomHelp", Type: "Action", Sender: Player.MemberNumber });