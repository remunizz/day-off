var colors = require('colors');

// Main
var displayCalendar = function (currentDate, year, month) {
    var weekDaysNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    var daysOfMonthsNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var firstDayOfMonth = new Date(year != undefined ? year : currentDate.getFullYear(), month != undefined ? month : currentDate.getMonth(), 1);

    // Store the first day of the week (to avoid function loop call)
    var firstDayWeek = firstDayOfMonth.getDay();

    // Loop vars
    var i = 0, j;

    var gridDayNum = weekDaysNames.length;
    var gridWeekNum = 6;

    var dayBuffer;
    var logBuffer;
    var dayNum;
    var logHeader = "";
    var dayCount = 0;

    var maxDays = (firstDayOfMonth.getFullYear() % 4 == 0 && firstDayOfMonth.getMonth() == 1 ? 29 : daysOfMonthsNum[firstDayOfMonth.getMonth()]);

    // Construct string Log
    for (i; i < gridWeekNum; ++i) {
        // Clear log buffer
        logBuffer = "";

        // Clear day buffer
        j = 0;

        // Construct day log
        for (j; j < gridDayNum; ++j) {
            // Construct header if is the first week
            if (i == 0) {
                logHeader += " " + weekDaysNames[j].black + " ";
            }

            // Set the day number
            dayCount = ((gridDayNum * i) + j) + 1;
            dayNum = dayCount - firstDayWeek;

            // Write the log with 2 digits
            if (dayNum > maxDays) {
                continue;
            } else if (dayNum.toString().length >= 2) {
                dayBuffer = " " + dayNum + " ";
            } else {
                dayBuffer = " 0" + dayNum + " ";
            }

            if (dayNum <= 0) {
                dayBuffer = "    "
            } else if (dayNum == currentDate.getUTCDate() && firstDayOfMonth.getMonth() == currentDate.getMonth()) {
                dayBuffer = dayBuffer.bgWhite.black;
            }

            logBuffer += dayBuffer;
        }

        // Print the header if is the first week
        if (i == 0) {
            console.log(logHeader.bgBlue);
        }

        // Print the log day
        console.log(logBuffer);
    }
}

// Init
var init = function () {
    var currentDay = new Date(Date.now());

    // inital support to full calendar display
    if (process.argv[2] == "-y") {
        var i = 0;
        var total = 12;
        for (i; i < total; ++i) {
            displayCalendar(currentDay, currentDay.getFullYear(), i, currentDay.getDate());
        }
    } else {
        displayCalendar(currentDay, currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate());
    }
}

init();