QuickAccessMenu.push({
	name: "safewordspecific",
	aliases: ["safe"],
	help: undefined,
	running: false,
	execute(argument) {
		if (!this.running || divMsg == null) {
			var div = document.querySelector("#TextAreaChatLog");
			var divMsg = document.createElement('div');
			divMsg.classList.add("ChatMessage", "ChatMessageAction", "ChatMessageEnterLeave", "ChatMessageNonDialogue", "DummyCmd");
			divMsg.style.backgroundColor = "rgba(255,255,255,0.1)";
			div.append(divMsg);
		}
		if (this.running) divMsg = document.querySelector('.DummyCmd');
		divMsg.innerHTML = `<div class="dummyContainer">
		<div class="dummyEars"><button id="ItemEars" class="dummyButton">Ears</button></div>
		<div class="dummyHoods"><button id="ItemHood" class="dummyButton">Hood</button></div>
		<div class="dummyEyes"><button id="ItemHead" class="dummyButton">Eyes</button></div>
		<div class="dummyNose"><button id="ItemNose" class="dummyButton">Nose</button></div>
		<div class="dummyGag1"><button id="ItemMouth" class="dummyButton">Gag1</button></div>
		<div class="dummyGag2"><button id="ItemMouth2" class="dummyButton">Gag2</button></div>
		<div class="dummyGag3"><button id="ItemMouth3" class="dummyButton">Gag3</button></div>
		<div class="dummyChain"><button id="ItemAddon" class="dummyButton">Chain</button></div>
		<div class="dummyCollarMisc"><button id="ItemNeckAccessories" class="dummyButton">Collar Misc</button></div>
		<div class="dummyCollar"><button id="ItemNeck" class="dummyButton">Collar</button></div>
		<div class="dummyLeash"><button id="ItemNeckRestraints" class="dummyButton">Leash</button></div>
		<div class="dummyNipples"><button idItemNipples class="dummyButton">Nipples</button></div>
		<div class="dummyNipplesPierc"><button id="ItemNipplesPiercings" class="dummyButton">Nipples Piercing</button></div>
		<div class="dummyBreasts"><button id="ItemBreast" class="dummyButton">Breasts</button></div>
		<div class="dummyTorso"><button id="ItemTorso" class="dummyButton">Torso</button></div>
		<div class="dummyPelvis"><button id="ItemPelvis" class="dummyButton">Pelvis</button></div>
		<div class="dummyVulva"><button id="ItemVulva" class="dummyButton">Vulva</button></div>
		<div class="dummyClit"><button id="ItemVulvaPiercings" class="dummyButton">Clit</button></div>
		<div class="dummyButt"><button id="ItemButt" class="dummyButton">Butt</button></div>
		<div class="dummyLegs"><button id="ItemLegs" class="dummyButton">Legs</button></div>
		<div class="dummyFeet"><button id="ItemFeet" class="dummyButton ">Feet</button></div>
		<div class="dummyBoots"><button id="ItemBoots" class="dummyButton">Boots</button></div>
		<div class="dummyDevices1"><button id="ItemDevices" class="dummyButton">Devices</button></div>
		<div class="dummyDevices2"><button id="ItemDevices" class="dummyButton">Devices</button></div>
		<div class="dummyHands1"><button id="ItemHands" class="dummyButton">Hands</button></div>
		<div class="dummyHands2"><button id="ItemHands" class="dummyButton">Hands</button></div>
		<div class="dummyArms1"><button id="ItemArms" class="dummyButton">Arms</button></div>
		<div class="dummyArms2"><button id="ItemArms" class="dummyButton">Arms</button></div>
		<div class="dummyHoodAddon"><button id="ItemHoodAddon" class="dummyButton">Hood Addon</button></div>
		<div class="dummyMisc"><button id="ItemMisc" class="dummyButton">Misc</button></div>
		<div class="dummyRemoveAll"><button id="removeAllButton" class="dummyButton dummyRemoveAll">Remove all</button></div>
		<div class="dummyClose"><button id="closeButton" class="dummyButton dummyClose">Close menu</button></div>
	</div>`;
		this.running = true;
		var dummyButtons = document.querySelectorAll('.dummyButton');

		for (const button of dummyButtons) {
			if (button.id == "removeAllButton") {
				button.addEventListener('click', () => {
					Player.Appearance = Player.Appearance.filter(x => !x.Asset.Group.Name.match(/Item.*/));
					ChatRoomCharacterUpdate(Player);
					divMsg.innerHTML = 'test';
					this.execute();
				})
			}
			else if (button.id == "closeButton") {
				button.addEventListener('click', () => {
					divMsg.parentNode.removeChild(divMsg);
					this.running = false;
				})
			}
			else {
				if (!bodyPartHasRestraint(Player, button.id)) {
					button.disabled = true;
				}
				button.addEventListener('click', () => {
					InventoryRemove(Player, button.id);
					ChatRoomCharacterUpdate(Player);
					divMsg.innerHTML = 'test';
					this.execute();
				})
			}
		}
	},
})



