QuickAccessMenu.push({
	name: "store",
	aliases: ["shop"], 
	execute(argument) {
		Asset.forEach(e => { if (e.Value < 0) e.Value = 1; });
		ServerSend("ChatRoomLeave", "");
		CommonSetScreen("Room", "Shop");
		ChatRoomSetLastChatRoom("");
		OnlineGameName = "";
		ChatRoomClearAllElements();
	},
})

