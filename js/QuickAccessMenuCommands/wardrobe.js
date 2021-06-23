QuickAccessMenu.push({
	name: "wardrobe", 
	needArgument: true, 
	execute(argument) {
		var target = TargetMethod(argument[0]);

		ChatRoomClickCharacter(target);
		ChatRoomChangeClothes();
	},
})