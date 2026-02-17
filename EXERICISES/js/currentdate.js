// Day names array

const dayNames = ["Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sarturday",
    "Sunday"
];
// Month name array
const months = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];

const currentdate = dayName + "," + todaysdate.getDate() + "" + monthName + ","+ todaysdate.getFullYear();

document.getElementById("currentdate").textContent = currentdate;