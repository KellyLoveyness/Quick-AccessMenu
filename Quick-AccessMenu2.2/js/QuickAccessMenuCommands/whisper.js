QuickAccessMenu.push({
	name: "whisper",
	needArgument: true,
	aliases: ["w"],
	help: '',
	execMsg: undefined,
	execute(argument) {
		var whisperTarget = TargetMethod(argument[0])
		argument.shift();

		if (argument.length < 1) {
			ChatRoomMessage({ Content: "Quick-AccessMenu2.2: Whisper must include message.", Type: "LocalMessage", Sender: Player.MemberNumber });
			return;
		}
/* BROKEN because reasons. Whisper filtrates gag talk, but this should have created a custom message based on gagtalk thus not be considered. Need fixing.
           if (Player.ImmersionSettings.BlockGaggedOOC) {
            var GagLevel = undefined;
            if (SpeechGetGagLevel(Player, "ItemHoodAddon") > 0) { GagLevel = SpeechGetGagLevel(Player, "ItemHoodAddon") }
            else if (SpeechGetGagLevel(Player, "ItemHood") > 0) { GagLevel = SpeechGetGagLevel(Player, "ItemHood") }
            else if (SpeechGetGagLevel(Player, "ItemDevices") > 0) { GagLevel = SpeechGetGagLevel(Player, "ItemDevices") }
            else if (SpeechGetGagLevel(Player, "ItemNeck") > 0) { GagLevel = SpeechGetGagLevel(Player, "ItemNeck") }
            else if (SpeechGetGagLevel(Player, "ItemHead") > 0) { GagLevel = SpeechGetGagLevel(Player, "ItemHead") }
            else if (SpeechGetGagLevel(Player, "ItemMouth3") > 0) { GagLevel = SpeechGetGagLevel(Player, "ItemMouth3") }
            else if (SpeechGetGagLevel(Player, "ItemMouth2") > 0) { GagLevel = SpeechGetGagLevel(Player, "ItemMouth2") }
            else if (SpeechGetGagLevel(Player, "ItemMouth") > 0) { GagLevel = SpeechGetGagLevel(Player, "ItemMouth") }
            msg = SpeechGarbleByGagLevel(GagLevel, msg);
        }
*/
		var msg = argument.join(' ');

		try {
			if (!whisperTarget) throw new Error();

			ServerSend("ChatRoomChat", { Content: msg, Type: "Whisper", Target: whisperTarget.MemberNumber });
			
			// creating whisper message imitation for sender
            if (whisperTarget !== Player) {
			ChatRoomMessage({ Content: "Whisper to "+whisperTarget.Name+": "+msg, Type: "LocalMessage", Sender: Player.MemberNumber });
			document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";
			document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
            }}
		catch {
			// ChatRoomMessage({ Content: `Whisper to ${whisperTarget[0].Name}: ${msg}`, Type: "LocalMessage", Sender: Player.MemberNumber });
		}
	},
})