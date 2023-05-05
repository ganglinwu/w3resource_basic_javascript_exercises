let year = new Date().getFullYear();

let isLeapYear = (year%4) ? false : 
            (year%400) ? false : true

console.log(`It is ${isLeapYear} that the current year, ${year}, is a leap year.`);