let day; 
let date = new Date();

switch (date.getDay()) {

    case 0:
        day = 'Sunday';
        break;

    case 1:
        day = 'Monday';
        break;

    case 2:
        day = 'Tuesday';
        break;

    case 3:
        day = 'Wednesday';
        break;

    case 4:
        day = 'Thursday';
        break;

    case 5:
        day = 'Friday';
        break;

    case 6:
        day = 'Saturday';
        break;
}

let ampm = Math.floor((date.getHours())/12) ? 'PM': 'AM';

let hours = date.getHours()%12;

console.log(`Today is : ${day}.`);
console.log(`Current time is : ${hours} ${ampm}: ${date.getMinutes()} : ${date.getSeconds()}`);