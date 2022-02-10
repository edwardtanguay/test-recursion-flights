const flightCollections = [
	[
		{
			airport: "berlin"
		},
		{
			airport: "london"
		},
		{
			airport: "paris"
		}
	],
	[
		{
			airport: "paris"
		},
		{
			airport: "hamburg"
		},
		{
			airport: "london"
		}
	],
	[
		{
			airport: "hamburg"
		},
		{
			airport: "rome"
		},
		{
			airport: "paris"
		}
	]
];

const commonDestinations = [];

const compareFlights = (currentIndex) => {
	const flights1 = flightCollections[currentIndex];
	const flights2 = flightCollections[currentIndex + 1];
	const atEnd = flightCollections.length - currentIndex === 2;
	if (!atEnd) {
		flights1.forEach((flight1) => {
			flights2.forEach(flight2 => {
				if (flight1.airport === flight2.airport) {
					compareFlights(currentIndex + 1);
				}
			});
		});
	} else {
		flights1.forEach((flight1) => {
			flights2.forEach(flight2 => {
				if (flight1.airport === flight2.airport) {
					commonDestinations.push({ airport: flight1.airport });
				}
			});
		});
	}
}

compareFlights(0);
console.log(commonDestinations);