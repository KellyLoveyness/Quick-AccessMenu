QuickAccessMenu.push({
	name: "action", 
	needArgument: true, 
	alias: ["a"], 
	execute(argument) {
		ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{ Tag: "Beep", Text: argument.join(" ") }] });
	},
})