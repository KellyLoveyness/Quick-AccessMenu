QuickAccessMenu.push({
	name: "resetdifficulty",
	needArgument: false,
	alias: ["difficultyreset"],
	help: "Quick-AccessMenu2.2: Command can reset difficulty, to end extreme mode instantly for example.",
	execute(argument) {
        if (argument.includes("yes")) {
        Player.Difficulty = [];
        ChatRoomMessage({ Content: "Quick-AccessMenu2.2: Difficulty reset, select a new one in settings.", Type: "LocalMessage", Sender: Player.MemberNumber });}
        else {ChatRoomMessage({ Content: "Quick-AccessMenu2.2: Warning, resetting difficulty will incur a 7-day waiting period to rechange. Confirm by typing: /resetdifficulty yes", Type: "LocalMessage", Sender: Player.MemberNumber })}
    

    },
})
