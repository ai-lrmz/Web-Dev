/*
1)
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 Jan 2014
alert( getWeekDay(date) ); // FR

2)
function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}*/
