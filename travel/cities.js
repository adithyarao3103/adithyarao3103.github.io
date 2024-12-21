let cities = [
    {
    "Name": "Ahmedabad",
    "Long": 72.5797068,
    "Lat": 23.0216238,
    "Year": 2024,
    "Description": "College trip memories. The aquarium in the science center was cool."
    },
    {
    "Name": "Gandhinagar",
    "Lat": 23.2156,
    "Long": 72.6369,
    "Year": 2024,
    "Description": "College trip memories. The Akshardham temple"
    },
    {
    "Name": "Alappuzha",
    "Long": 76.333482,
    "Lat": 9.4980001,
    "Description": ""
    },
    {
    "Name": "Amsterdam",
    "Long": 4.8936041,
    "Lat": 52.3727598,
    "Year": 2023,
    "Description": "DAAD. Crazy place. Was my first culture shock in Europe."
    },
    {
    "Name": "Bengaluru",
    "Long": 77.590082,
    "Lat": 12.9767936,
    "Year": '2022, 2023',
    "Description": "Internship, interview and more"
    },
    {
    "Name": "Berlin",
    "Long": 13.3888599,
    "Lat": 52.5170365,
    "Year": 2023,
    "Description": "DAAD. Best 50 Euros from the DAAD-WISE money I ever spent."
    },
    {
    "Name": "Bern",
    "Long": 7.4514512,
    "Lat": 46.9482713,
    "Year": 2023,
    "Description": "DAAD. Beautiful City, Swiss feels more beautiful when you have free DAAD money XD"
    },
    {
    "Name": "Bonn",
    "Long": 7.10066,
    "Lat": 50.735851,
    "Description": "DAAD. Collateral visit as a part of some other trip"
    },
    {
    "Name": "Chemnitz",
    "Long": 12.9252977,
    "Lat": 50.8322608,
    "Year": 2023,
    "Description": "DAAD. Best home-made food for the three months of DAAD."
    },
    {
    "Name": "Cologne",
    "Long": 6.959974,
    "Lat": 50.938361,
    "Year": 2023,
    "Description": "DAAD. The cathedral damn."
    },
    {
    "Name": "Dresden",
    "Long": 13.7381437,
    "Lat": 51.0493286,
    "Year": 2023,
    "Description": "DAAD. Beautiful Architecture, beautiful city."
    },
    {
    "Name": "Erfurt",
    "Long": 11.0287364,
    "Lat": 50.9777974,
    "Year": 2023,
    "Description": "DAAD. Missed this station on my way to Jena extending my journey by another 5 hours, hungry, lost and tired. Was fun, 100/100 recommended."
    },
    {
    "Name": "Ernakulam",
    "Long": 76.2741457,
    "Lat": 9.98408,
    "Description": ""
    },
    {
    "Name": "Frankfurt",
    "Long": 8.6820917,
    "Lat": 50.1106444,
    "Year": '2023, 2024',
    "Description": "Airport. Thats the only reason I visited this city. Cool place tho."
    },
    {
    "Name": "Giethoorn",
    "Long": 6.077431,
    "Lat": 52.741105,
    "Year": 2023,
    "Description": "DAAD. Absolutely gorgeous place. Must visit."
    },
    {
    "Name": "Göttingen",
    "Long": 9.9351811,
    "Lat": 51.5328328,
    "Year": 2023,
    "Description": "DAAD. Collateral visit as a part of some other trip"
    },
    {
    "Name": "Grindelwald",
    "Long": 8.0367462,
    "Lat": 46.6242733,
    "Year": 2023,
    "Description": "DAAD. Nice place, good view of alps. Couldn't muster the courage to buy food tho."
    },
    {
    "Name": "Hamburg",
    "Long": 10.000654,
    "Lat": 53.550341,
    "Year": 2023,
    "Description": "DAAD. Miniature Wunderland!! Crazy place."
    },
    {
    "Name": "Heidelberg",
    "Long": 8.694724,
    "Lat": 49.4093582,
    "Year": 2023,
    "Description": "DAAD. Peaceful city, visited only to catch a train to Frankfurt tho."
    },
    {
    "Name": "Hubli",
    "Long": 75.1379848,
    "Lat": 15.3518378,
    "Description": ""
    },
    {
    "Name": "Interlaken",
    "Long": 7.8585139,
    "Lat": 46.6855231,
    "Year": 2023,
    "Description": "DAAD. I should have gone swimming.. I regret it."
    },
    {
    "Name": "Jena",
    "Long": 11.5879359,
    "Lat": 50.9281717,
    "Year": 2023,
    "Description": "Home for 3 months of DAAD"
    },
    {
    "Name": "Lauterbrunnen",
    "Long": 7.9078016,
    "Lat": 46.5939043,
    "Year": 2023,
    "Description": "India has better waterfalls, hands down."
    },
    {
    "Name": "Leipzig",
    "Long": 12.3747329,
    "Lat": 51.3406321,
    "Year": 2023,
    "Description": "DAAD. This city gives different vibes. After Prague this is my next favorite city."
    },
    {
    "Name": "Lindau",
    "Long": 9.682050671,
    "Lat": 47.54574555,
    "Year": 2024,
    "Description": "Nobel Laureates Meeting! This is where my life peaked"
    },
    {
    "Name": "Lübeck",
    "Long": 10.684738,
    "Lat": 53.866444,
    "Year": 2023,
    "Description": "DAAD. Expected more, but satisfied by the chocolates"
    },
    {
    "Name": "Mahabaleshwar",
    "Long": 73.6553,
    "Lat": 17.9307,
    "Year": 2022,
    "Description": "College trip memories."
    },
    {
    "Name": "Mainau",
    "Long": 9.194512844,
    "Lat": 47.7052926,
    "Year": 2024,
    "Description": "Boat trip! Absolutely rocked. Had the Nobel Laureates dance with us for the party!!"
    },
    {
    "Name": "Mangaluru",
    "Long": 74.8430082,
    "Lat": 12.8698101,
    "Description": ""
    },
    {
    "Name": "Mantralayam",
    "Long": 77.3747,
    "Lat": 15.9349,
    "Year": 2024,
    "Description": ""
    },
    {
    "Name": "Mumbai",
    "Long": 72.878176,
    "Lat": 19.0785451,
    "Year": '2023, 2024',
    "Description": "Visa, award ceremony,flight, and Visa again"
    },
    {
    "Name": "Munich",
    "Long": 11.5753822,
    "Lat": 48.1371079,
    "Year": 2023,
    "Description": "DAAD. Visited so that I can catch a train to Konigsee. "
    },
    {
    "Name": "Münster",
    "Long": 7.6251879,
    "Lat": 51.9625101,
    "Year": 2023,
    "Description": "DAAD. Collateral visit as a part of some other trip"
    },
    {
    "Name": "Mysuru",
    "Long": 76.6553609,
    "Lat": 12.3051828,
    "Description": ""
    },
    {
    "Name": "New Delhi",
    "Long": 77.2090057,
    "Lat": 28.6138954,
    "Year": 2024,
    "Description": "No comments. Visited to catch flight for the Lindau Meetings"
    },
    {
    "Name": "Prague",
    "Long": 14.4212535,
    "Lat": 50.0874654,
    "Year": 2023,
    "Description": "DAAD. Hands down the best city in entire Europe. I won't hear otherwise."
    },
    {
    "Name": "Pune",
    "Long": 73.8544541,
    "Lat": 18.521428,
    "Year": '2022, 2024',
    "Description": "Trip, interview and more."
    },
    {
    "Name": "Salzburg",
    "Long": 13.0464806,
    "Lat": 47.7981346,
    "Year": 2023,
    "Description": "DAAD. Nice place."
    },
    {
    "Name": "Surat",
    "Long": 72.8317058,
    "Lat": 21.2094892,
    "Year": '2019-24',
    "Description": "Second home"
    },
    {
    "Name": "Thrissur",
    "Long": 76.2132542,
    "Lat": 10.5256264,
    "Description": ""
    },
    {
    "Name": "Tirupati",
    "Long": 79.4231711,
    "Lat": 13.6316368,
    "Description": ""
    },
    {
    "Name": "Tumakuru",
    "Long": 77.1006208,
    "Lat": 13.3400771,
    "Description": ""
    },
    {
    "Name": "Udupi",
    "Long": 74.7473232,
    "Lat": 13.3419169,
    "Description": ""
    },
    {
    "Name": "Vadodara",
    "Long": 73.1942567,
    "Lat": 22.2973142,
    "Year": 2024,
    "Description": "Exam center was the only reason LOL"
    },
    {
    "Name": "Dubai",
    "Long": 55.2708,
    "Lat": 25.2048,
    "Year": 2023,
    "Description": "Flight Layover LOL"
    },
    {
    "Name": "Kuwait",
    "Long": 47.4818,
    "Lat": 29.3117,
    "Year": 2023,
    "Description": "Same as Dubai XD"
    }
];