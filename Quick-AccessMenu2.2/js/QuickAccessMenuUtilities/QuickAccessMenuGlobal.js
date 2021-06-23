// if command needs any variables/functions in global scope, store them here
///////////////////////////////////////////////////////////////////////
var QuickAccessMenu = [];
///////////////////////////////////////////////////////////////////////////////////
var bglistPosition = -1;
var bglist = [
	"AsylumBedroom",
	"AsylumEntrance",
	"AsylumMeeting",
	"AsylumTherapy",
	"AmandaIntro",
	"Bar",
	"BoutiqueBack",
	"BrickWall",
	"Cell",
	"CollegeClass",
	"CollegeCafeteria",
	"CollegeDetention",
	"CollegeEntrance",
	"CollegeTeacherLounge",
	"CollegeTennisPlay",
	"CollegeTennis",
	"CollegeTheater",
	"Dressing",
	"Gambling",
	"grey",
	"HorseStableLight",
	"Magic",
	"MiddletownSchool",
	"MovieStudio",
	"/Orig/buhne-dekorativ-kino-276179",
	"/Orig/Entrance",
	"/Orig/Lounge",
	"OutsideCells",
	"PaddedCell",
	"PaddedCell2",
	"/Pandora/Ground/Entrance",
	"/Pandora/Underground/Cell0",
	"/Pandora/Underground/Cell1",
	"/Pandora/Underground/Cell2",
	"/Pandora/Underground/Cell3",
	"/Pandora/Underground/Cell4",
	"/Pandora/Underground/Cell5",
	"/Pandora/Underground/Cell6",
	"/Pandora/Underground/Entrance",
	"/Pandora/Underground/Fork0",
	"/Pandora/Underground/Fork1",
	"/Pandora/Underground/Fork2",
	"/Pandora/Underground/Fork3",
	"/Pandora/Underground/Fork4",
	"/Pandora/Underground/Fork5",
	"/Pandora/Underground/Fork6",
	"/Pandora/Underground/Tunnel0",
	"/Pandora/Underground/Tunnel1",
	"/Pandora/Underground/Tunnel2",
	"/Pandora/Underground/Tunnel3",
	"/Pandora/Underground/Tunnel4",
	"/Pandora/Underground/Tunnel5",
	"/Pandora/Underground/Tunnel6",
	"/Pandora/Underground/Tunnel6",
	"Prison",
	"RhythmGame",
	"RhythmGameLoading",
	"SarahBedroom0",
	"SarahBedroom1",
	"SarahBedroom2",
	"SarahBedroom3",
	"SarahIntro",
	"Sheet",
	"SheetWhite",
	"Shop",
	"SlaveMarket",
	"SophieIntro",
	"SchoolHospital",
	"SlipperyClassroom",
];
////////////////////////////////////////////////////////////////
function updateBackground() {
	var UpdatedRoom = {
		Name: ChatRoomData.Name,
		Description: ChatRoomData.Description,
		Background: bglist[bglistPosition], //NAMEGOES HERE
		Limit: "" + ChatRoomData.Limit,
		Admin: ChatRoomData.Admin,
		Ban: ChatRoomData.Ban,
		BlockCategory: ChatRoomData.BlockCategory,
		Game: ChatRoomData.Game,
		Private: ChatRoomData.Private,
		Locked: ChatRoomData.Locked,
	};
	ServerSend("ChatRoomAdmin", {
		MemberNumber: Player.ID,
		Room: UpdatedRoom,
		Action: "Update",
	});
	ChatRoomMessage({
		Content: bglist[bglistPosition],
		Type: "LocalMessage",
		Sender: Player.MemberNumber,
	});
}
/////////////////////////////////////////////////////////////////
function sendHiddenMessage(message, MemberNumber) {
	ServerSend("ChatRoomChat", { Content: message, Type: "Hidden", Target: MemberNumber });
}
///////////////////////////////////////////////////////////////
function bodyPartHasRestraint (character, groupName) {
	var hasItem = false;
	for (const item of character.Appearance) {
		if (item.Asset.Group.Name == groupName) hasItem = true;
	}
	return hasItem;
}
//////////////////////////////////////////////////////////////////
function TargetMethod(name) {
var QuickAccessMenuTargetName = name;
var QuickAccessMenuTargetFinder = new RegExp('^'+QuickAccessMenuTargetName+'', 'i');
var QuickAccessMenuTarget = ChatRoomCharacter.filter(A => (A.Name.match(QuickAccessMenuTargetFinder)));
result = QuickAccessMenuTarget[0];
return result}

//////////////////////////////////////////////////////////////////
// grabs all messages from chatbox
if (CurrentScreen == "ChatRoom") {
	window.chatMessages = document.querySelector('#TextAreaChatLog').children;
}
// grabs all messages from chatbox on room enter
ServerSocket.on('ChatRoomSync', function (data) {
	window.chatMessages = document.querySelector('#TextAreaChatLog').children;
});

// number of last messages in chatbox that script processes.
var numberOfLastMessages = 5;

// youtube regex is nice, img one sucks, fails to recognize some links
var imgRe = /(?:(?:(?:[A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)(?:(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)(?:jpg|jpeg|gif|png)/;
var tubeRe = /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?/;

// helper variables
var lastMessageCount = 0;
var numOffset = numberOfLastMessages;

function insertMedia() {//currently runs on an interval. should be replaced with serversocket, requires sent whispers to be sent to self as hidden messages so insertMedia finds.

	if (chatMessages.length < numOffset) {
		numberOfLastMessages = chatMessages.length;
	} else {
		numberOfLastMessages = numOffset;
	}
	lastMessageCount = chatMessages.length;

	// adds text to whispers with images to make more clear that those are whispers
	for (var msg = chatMessages.length - numberOfLastMessages; msg < chatMessages.length; msg++) {
		if (chatMessages[msg].classList.contains('ChatMessageWhisper') && imgRe.test(chatMessages[msg].lastChild.textContent)) {
			chatMessages[msg].firstElementChild.innerHTML = '<span class="ChatMessageWhisper">(Whispering to you)</span> ' + chatMessages[msg].firstElementChild.innerHTML;
			chatMessages[msg].classList.remove('ChatMessageWhisper');
		}

		if (imgRe.test(chatMessages[msg].lastChild.textContent)) {
			var src = chatMessages[msg].lastChild.textContent.match(imgRe)[0];
			var a = document.createElement("a");
			a.target = '_blank';
			a.href = src;
			var img = document.createElement('img');
			img.style.maxWidth = '40%';
			img.style.maxHeight = '40%';
			img.style.display = 'block';
			img.src = src;
			chatMessages[msg].lastChild.textContent = '';
			a.append(img);
			chatMessages[msg].append(a);
		}
		else if (tubeRe.test(chatMessages[msg].lastChild.textContent)) {
			var videoCode = chatMessages[msg].lastChild.textContent.match(tubeRe)[5];
			chatMessages[msg].lastChild.textContent = '';
			var link = `https://www.youtube.com/embed/${videoCode}`;
			var iframe = document.createElement('iframe');
			iframe.src = link;
			iframe.style.width = '50%';
			iframe.style.height = '8em';
			iframe.style.display = 'block';
			chatMessages[msg].append(iframe);
		}
	}
}

// processes messages with links if there are new messages
setInterval(() => {
	if (CurrentScreen == "ChatRoom" && chatMessages.length != lastMessageCount) {
		insertMedia();
	}
}, 1000)
