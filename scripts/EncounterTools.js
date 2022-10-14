class EncounterTools
{
	static #Name = "5e.encounter.tools";
	
	static log(...args)
	{
		console.log(this.#Name, "|", ...args);
	}
}
