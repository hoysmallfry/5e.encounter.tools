class EncounterTools
{
	const Name = "5e.encounter.tools";
	
	static log(...args)
	{
		console.log(Name, "|", ...args);
	}
}

import { EncounterTools } from "./EncounterTools.js";

Hooks.on("ready", () =>
{
	if (!game.user.isGM)
	{
		EncounterTools.log("User is not Game Master.");
		
		return;
	}

    EncounterTools.log("User is a Game Master.");
});