const checkForText = async (url, text) => {
	const page = await fetch(url);
	const body = await page.text();

	if (body.includes(text)) {
		console.log(`Passed. "${text}" found on ${url}`);
	} else {
		console.error(`Failed. Did not find "${text}" on ${url}!`)
	}
}

checkForText('https://www.komoot.com/team', 'Quality');