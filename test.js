const flightCollections = [
	[
		{
			airport: "berlin"
		},
		{
			airport: "london"
		},
		{
			airport: "hamburg"
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
			airport: "bordeux"
		},
		{
			airport: "paris"
		}
	],
	[
		{
			airport: "hamburg"
		},
		{
			airport: "london"
		},
		{
			airport: "munich"
		}
	]
];

const commonDestinations = [];

const compareFlights = (currentIndex, currentAirport = null) => {
	const flights1 = flightCollections[currentIndex];
	const flights2 = flightCollections[currentIndex + 1];
	const atEnd = flightCollections.length - currentIndex === 2;

	const airportsAreTheSame = (currentAirport, flight1, flight2) => {
		return (currentAirport === null || flight1.airport === currentAirport) && flight1.airport === flight2.airport;
	};

	if (!atEnd) {
		flights1.forEach((flight1) => {
			flights2.forEach(flight2 => {
				if (airportsAreTheSame(currentAirport, flight1, flight2)) {
					compareFlights(currentIndex + 1, flight1.airport);
				}
			});
		});
	} else {
		flights1.forEach((flight1) => {
			flights2.forEach(flight2 => {
				if (airportsAreTheSame(currentAirport, flight1, flight2)) {
					commonDestinations.push({ airport: flight1.airport });
				}
			});
		});
	}
}

compareFlights(0);
console.log(commonDestinations);