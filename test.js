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
	const flights2 = currentIndex === flightCollections.length - 1 ? null : flightCollections[currentIndex + 1];
	flights1.forEach((flight1) => {
		if (flights2 !== null) {
			flights2.forEach(flight2 => {
				if (flight1.airport === flight2.airport) {
					compareFlights(currentIndex + 1);
				}
			});
		} else {
			flights2.forEach(flight2 => {
				if (flight1.airport === flight2.airport) {
					commonDestinations.push(flight.airport);
				}
			});
		}
	});
}

compareFlights(0);
console.log(commonDestinations);