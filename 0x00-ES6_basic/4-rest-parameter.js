export default function returnHowManyArguments(...Args) {
	let count = 0;

	for (const arg of Args) {
		count += 1;
	}
	return count;
}
