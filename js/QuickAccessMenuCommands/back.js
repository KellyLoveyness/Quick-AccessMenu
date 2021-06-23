QuickAccessMenu.push({
	name: "back",
	execute(argument) {
		if (bglistPosition <= 0) {
			bglistPosition = bglist.length - 1;
		} else {
			bglistPosition--;
		}
		updateBackground();
	},
})