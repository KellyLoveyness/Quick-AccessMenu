QuickAccessMenu.push({
	name: 'demo', // command name which user has to type in chat in order to execute it
	needArgument: true, // add this if command only works with arguments
	alias: ['showcase', 'test'], // additional command names with which it can be executed
	help: 'Describe here what command does and how to use', // here goes text that will be shown when user types "!%command name% help"
	execute(argument) {
		// here goes code
		// args contains arguments in the same order as user typed them
		sendLocalMessage(`The args are: ${args.join(', ')}`);
	},
})

// only 'name' field is mandatory, other fields are optional
