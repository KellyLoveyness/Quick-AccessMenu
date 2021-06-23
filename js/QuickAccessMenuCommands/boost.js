QuickAccessMenu.push({
	name: "boost", 
	execute(argument) {
		LogAdd("ModifierLevel", "SkillModifier", 105);
		LogAdd("ModifierDuration", "SkillModifier", CurrentTime + 3600000);
		ChatRoomMessage({ Content: "Quick-AccessMenu2.2: You feel your senses heightened(bondage/evasion). Can see change in information panel.", Type: "LocalMessage", Sender: Player.MemberNumber })
	},
})