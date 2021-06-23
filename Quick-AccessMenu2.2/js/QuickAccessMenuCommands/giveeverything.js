QuickAccessMenu.push({
	name: "giveeverything",
	alias: ["giveall"], 
	execute(argument) {
		AssetFemale3DCG.forEach(group => group.Asset.forEach(item => InventoryAdd(Player, item.Name, group.Group)));
		ServerPlayerInventorySync();
		ChatRoomMessage({ Content: "Quick-AccessMenu2.2: Every item saved to inventory.", Type: "LocalMessage", Sender: Player.MemberNumber })
	},
})