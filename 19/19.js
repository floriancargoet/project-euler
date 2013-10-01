/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

var days = [31,28,31,30,31,30,31,31,30,31,30,31];
var day = 1; // 1 Jan 1900, monday
var year = 1900;
var sundays = 0;

while (year < 2001) {
    for (var i = 0; i < 12; i++) {
        var d = days[i];
        if (i === 1 && year % 4 === 0 && year != 1900) {
            // leap year
            d++;
        }
        day += d; // go to next 1st of month
        if (day % 7 === 0 && year > 1900) {
            // it's a sunday in the 20th century
            sundays++;
        }
    }
    year++;
}

console.log(sundays);