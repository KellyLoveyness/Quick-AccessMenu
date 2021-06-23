(typeof OLDChatRoomSendChat !== "undefined") && (ChatRoomSendChat = OLDChatRoomSendChat);//Reset.
function NEWQuickAccessMenu() {

//Makes chat target.
var content = ElementValue("InputChat").trim();
var argument = content.slice(1).trim().split(/ +/);

if (CurrentScreen == "ChatRoom") {//Commands used within an if, for extra stability.
    for (const cmd of QuickAccessMenu) {
        if (cmd.name == argument[0]) {
        var command = cmd;}
        else if (cmd.alias && cmd.alias.includes(argument[0])) {
        var command = cmd;}
		}
		argument.shift();//Reset above.

		//Decides how to handle command.
		    if (command && content.startsWith(QuickAccessMenuPrefix)) {
			    if (command.needArgument && argument.length == 0) {
                ChatRoomMessage({ Content: "Quick-AccessMenu2.2: Command was used wrong, type /"+command.Name+" help", Type: "LocalMessage", Sender: Player.MemberNumber });}
		    	else if (argument.length > 0 && argument[0].toLowerCase() == "help") {
                ChatRoomMessage({ Content: command.help, Type: "LocalMessage", Sender: Player.MemberNumber });}
		    	else {
                command.execute(argument);}
		}

else {//Decides speech mode; command, modified, original.
    if (this.BabyTalkOn == true) {
    content = SpeechBabyTalk({Effect: ["RegressedTalk"]}, content);
    ServerSend("ChatRoomChat", { "Content":content, "Type":"Chat" })
    ElementValue("InputChat", "");
    }
    else if (this.TalkGagLightOn == true) {
    content = SpeechGarbleByGagLevel(1, content);
    ServerSend("ChatRoomChat", { "Content":content, "Type":"Chat" });
    ElementValue("InputChat", "");
    }
    else if (this.TalkGagHeavyOn == true) {
    content = SpeechGarbleByGagLevel(6, content);
    ServerSend("ChatRoomChat", { "Content":content, "Type":"Chat" });
    ElementValue("InputChat", "");
    }
    else {OLDChatRoomSendChat()}
}ElementValue("InputChat", "");
}}
var OLDChatRoomSendChat = ChatRoomSendChat;
var ChatRoomSendChat = NEWQuickAccessMenu;