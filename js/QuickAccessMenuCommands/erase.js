QuickAccessMenu.push({
	name: "erase",
	alias: ["clear"],
	execute(argument) {
		ElementRemove("TextAreaChatLog");
	},
})