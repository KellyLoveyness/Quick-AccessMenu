QuickAccessMenu.push({
	name: 'next',
	execute(argument) {
		if (bglistPosition == bglist.length - 1) {
			bglistPosition = 0;
		} else if (bglistPosition < bglist.length - 1) {
			bglistPosition++;
		}
		updateBackground();
	},
})