QuickAccessMenu.push({
	name: "unrestrict",
	needsArgs: true,
	execute(args) {
		Asset.forEach(e => { if (e.Value < 0) e.Value = 1; });
		if (args[0] == 'soft') {
			InventoryGroupIsBlocked = function (C, GroupName) { return false; }
			InventoryPrerequisiteMessage = function (C, Prerequisit) { return ""; }
			Player.GameplaySettings.BlindDisableExamine = false;
			Player.Inventory.forEach(item => item.Asset.Enable = true);
			Player.Inventory.forEach(item => item.Asset.Wear = true);
			ChatSearchMuffle = function (Text) { }
			sendLocalMessage("Unrestricted softly. Can do most things you couldn't do before. Store also includes hidden items. This can only be reset via relog.");
		}
		else if (args[0] == 'total') {
			Player.CanInteract = function () { return true; }
			Player.CanWalk = function () { return true; }
			Player.CanTalk = function () { return true; }
			Player.IsPlugged = function () { return false; }
			Player.IsVulvaChaste = function () { return false; }
			Player.CanChange = function () { return true; }
			InventoryGroupIsBlocked = function (C, GroupName) { return false; }
			InventoryPrerequisiteMessage = function (C, Prerequisit) { return ""; }
			Player.GameplaySettings.BlindDisableExamine = false;
			Player.Inventory.forEach(item => item.Asset.Enable = true);
			Player.Inventory.forEach(item => item.Asset.Wear = true);
			DialogHasKey = function (C, Item) { return true }
			StruggleLockPickProgressStart = function (C, Item) {
				InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
				ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
				DialogLeave()
			}
			StruggleProgressStart = function (C, PrevItem, NextItem) {
				if (InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name) == null) {
					if (C != Player || PrevItem == null || ((PrevItem != null) && (!InventoryItemHasEffect(PrevItem, "Lock", true) || DialogCanUnlock(C, PrevItem)) && ((Player.CanInteract() && !InventoryItemHasEffect(PrevItem, "Mounted", true)) || StruggleStrengthGetDifficulty(C, PrevItem, NextItem).auto >= 0))) {
						StruggleProgressCurrentMinigame = "Strength"; StruggleStrengthStart(C, PrevItem, NextItem);
					}
				} else {
					InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name); InventoryRemove(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
					ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
				}
			}
			sendLocalMessage("Unrestricted totally. Can do most things you couldn't do before. Store also includes hidden items. This can only be reset via relog.");
		}
		sendLocalMessage('Argument shoud be either "soft" or "full"');
	},
})