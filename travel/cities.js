let cities = [
    {
    "Name": "Ahmedabad",
    "Long": 72.5797068,
    "Lat": 23.0216238,
    "Description": "College trip memories"
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
    "Description": "DAAD-WISE 2023 associated mandatory money spending."
    },
    {
    "Name": "Bengaluru",
    "Long": 77.590082,
    "Lat": 12.9767936,
    "Description": "Internship, interview and more"
    },
    {
    "Name": "Berlin",
    "Long": 13.3888599,
    "Lat": 52.5170365,
    "Description": "Best 50 Euros from the DAAD-WISE money I ever spent"
    },
    {
    "Name": "Bern",
    "Long": 7.4514512,
    "Lat": 46.9482713,
    "Description": "Beautiful City, Swiss feels more beautiful when you have free DAAD money XD"
    },
    {
    "Name": "Bonn",
    "Long": 7.10066,
    "Lat": 50.735851,
    "Description": "DAAD WISE 2023"
    },
    {
    "Name": "Chemnitz",
    "Long": 12.9252977,
    "Lat": 50.8322608,
    "Description": "Best home-made food for the three months of DAAD"
    },
    {
    "Name": "Cologne",
    "Long": 6.959974,
    "Lat": 50.938361,
    "Description": "DAAD WISE 2023"
    },
    {
    "Name": "Dresden",
    "Long": 13.7381437,
    "Lat": 51.0493286,
    "Description": "Beautiful Architecture, DAAD-WISE 2023"
    },
    {
    "Name": "Dusseldorf",
    "Long": 6.7763137,
    "Lat": 51.2254018,
    "Description": "DAAD WISE 2023"
    },
    {
    "Name": "Erfurt",
    "Long": 11.0287364,
    "Lat": 50.9777974,
    "Description": "Missed this station causing my travel home to extend by another 5 hours, hungry, lost and tired. Was fun, 100/100 recommended."
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
    "Description": "Airport. Thats the only reason I visited this city. Cool place tho."
    },
    {
    "Name": "Giethoorn",
    "Long": 6.077431,
    "Lat": 52.741105,
    "Description": "Absolutely gorgeous place. Must visit. DAAD WISE 2023"
    },
    {
    "Name": "Göttingen",
    "Long": 9.9351811,
    "Lat": 51.5328328,
    "Description": "DAAD WISE 2023"
    },
    {
    "Name": "Grindelwald",
    "Long": 8.0367462,
    "Lat": 46.6242733,
    "Description": "Nice place, good view of alps. Couldn't muster the courage to buy food tho. DAAD WISE 2023"
    },
    {
    "Name": "Hamburg",
    "Long": 10.000654,
    "Lat": 53.550341,
    "Description": "Miniature Wunderland!! DAAD WISE 2023"
    },
    {
    "Name": "Heidelberg",
    "Long": 8.694724,
    "Lat": 49.4093582,
    "Description": "Peaceful city, DAAD WISE 2023"
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
    "Description": "I should have gone swimming.. DAAD WISE 2023"
    },
    {
    "Name": "Jena",
    "Long": 11.5879359,
    "Lat": 50.9281717,
    "Description": "Home for 3 months of DAAD"
    },
    {
    "Name": "Lauterbrunnen",
    "Long": 7.9078016,
    "Lat": 46.5939043,
    "Description": "India has better waterfalls"
    },
    {
    "Name": "Leipzig",
    "Long": 12.3747329,
    "Lat": 51.3406321,
    "Description": "Nice architecture, DAAD WISE 2023"
    },
    {
    "Name": "Lindau",
    "Long": 9.682050671,
    "Lat": 47.54574555,
    "Description": "2024 Lindau Nobel Laureates Meeting visit"
    },
    {
    "Name": "Lübeck",
    "Long": 10.684738,
    "Lat": 53.866444,
    "Description": "Expected more, but okok. DAAD WISE 2023"
    },
    {
    "Name": "Mahabaleshwar",
    "Long": 73.6553,
    "Lat": 17.9307,
    "Description": "College trip memories."
    },
    {
    "Name": "Mainau",
    "Long": 9.194512844,
    "Lat": 47.7052926,
    "Description": "2024 Lindau Nobel Laureates Meeting visit — Boat trip! Absolutely rocked."
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
    "Description": ""
    },
    {
    "Name": "Mumbai",
    "Long": 72.878176,
    "Lat": 19.0785451,
    "Description": "Visa, award ceremony and Visa again"
    },
    {
    "Name": "Munich",
    "Long": 11.5753822,
    "Lat": 48.1371079,
    "Description": "DAAD WISE 2023"
    },
    {
    "Name": "Münster",
    "Long": 7.6251879,
    "Lat": 51.9625101,
    "Description": "DAAD WISE 2023"
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
    "Description": "No comments. Visited to catch flight for the Lindau Meetings"
    },
    {
    "Name": "Prague",
    "Long": 14.4212535,
    "Lat": 50.0874654,
    "Description": "Hands down the best city in entire Europe. DAAD WISE 2023"
    },
    {
    "Name": "Pune",
    "Long": 73.8544541,
    "Lat": 18.521428,
    "Description": "Trip, interview and more."
    },
    {
    "Name": "Salzburg",
    "Long": 13.0464806,
    "Lat": 47.7981346,
    "Description": "DAAD WISE 2023"
    },
    {
    "Name": "Surat",
    "Long": 72.8317058,
    "Lat": 21.2094892,
    "Description": "Home from 2019-24"
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
    "Description": "Exam center was the only reason LOL"
    },
    {
    "Name": "Dubai",
    "Long": 55.2708,
    "Lat": 25.2048,
    "Description": "Flight Layover LOL"
    },
    {
    "Name": "Kuwait",
    "Long": 47.4818,
    "Lat": 29.3117,
    "Description": "Same as Dubai XD"
    }
];