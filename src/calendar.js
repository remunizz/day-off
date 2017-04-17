var colors = require('colors');
var optionExtender = require('optionextender');

// Arguments:
//   - year(required): number of the year.
//   - month(required): number of the month, between 1 and 12.
//   - day(required): number of day, between 1 and 31.
var Calendar = function (year, month, day) {

  // Validate the arguments.
  if (typeof(year) !== 'number')  throw ('a valid `year` argument is required');
  if (typeof(month) !== 'number') throw ('a valid `month` argument is required');
  if (typeof(day) !== 'number')   throw ('a valid `day` argument is required');

  // Assign a default localization dictionary.
  this.localization = {
        culture             : 'En-Us'
      , monthNames          : ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']
      , weekDaysNames       : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
      , WeekDayFormat       : ' {0} '
      , MonthDayFormat      : ' 0{0} '
      , MonthDayFormatHigh  : ' {0} '
      , MonthDayFormatEmpty : '----'
  };

  this.monthDays       = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  this.weekDays        = 7;
  this.days            = month == 2 && year % 4 == 0 ? 29 : this.monthDays[month - 1]; // Leap year bugfix
  this.date            = new Date(year, month - 1, day);
  this.firstDayOfMonth = new Date(year, month - 1, 1);
  this.firstDayWeek    = this.firstDayOfMonth.getDay(); // Store the first day of the week (to avoid function loop call)

  this.replace         = function(target, args) {
    if (args == null || args.length <= 0) return;
    for (var i = 0; i < args.length; ++i) target = target.replace(('{' + i + '}'), args[i])
    return target;
  };

};

// Generate and print the calendar.
Calendar.prototype.show = function () {

  var dayBuffer;
  var logBuffer;
  var dayNum;
  var headerColumns = '';
  var dayCount = 0;
  var isBufferFirstLine;

  for (var i = 0; i < this.weekDays; ++i) {

    logBuffer = '';

    for (var j = 0; j < this.weekDays; ++j) {

        isBufferFirstLine = i === 0;

        if (isBufferFirstLine) {
					// Add the week day header. 
					headerColumns += this.replace(this.localization.WeekDayFormat, [this.localization.weekDaysNames[j]]).white;
        }

        dayCount = ((this.weekDays * i) + j) + 1;
        dayNum = dayCount - this.firstDayWeek;

        // Validate and format the day string.
        if (dayNum > this.days) {
            continue;
        } else if (dayNum.toString().length >= 2) {
            dayBuffer = this.replace(this.localization.MonthDayFormatHigh, [dayNum]);
        } else {
            dayBuffer = this.replace(this.localization.MonthDayFormat, [dayNum]);
        }

        if (dayNum <= 0) {
            dayBuffer = this.localization.MonthDayFormatEmpty.trap;
        } else if (dayNum == this.date.getUTCDate() && this.firstDayOfMonth.getMonth() == this.date.getMonth()) {
           dayBuffer = dayBuffer.bgWhite.black;
        }

        logBuffer += dayBuffer;
    }

    // Print the header. 
    if (isBufferFirstLine) {
        console.log(headerColumns.bgBlue);
    }

    // Print the body.
    console.log(logBuffer);
  }

};

// Return the calendar's date.
Calendar.prototype.getDate = function () {
  return this.date;
};

// Set the calendar's date 
// Arguments:
//   - year(required): number of the year.
//   - month(required): number of the month, between 1 and 12.
//   - day(required): number of day, between 1 and 31.
Calendar.prototype.setDate = function (year, month, day) {

  if (typeof(year) !== 'number')  throw ('a valid `year` argument is required');
  if (typeof(month) !== 'number') throw ('a valid `month` argument is required');
  if (typeof(day) !== 'number')   throw ('a valid `day` argument is required');

  this.days            = month == 2 && year % 4 == 0 ? 29 : this.monthDays[month - 1]; // Leap year bugfix
  this.date            = new Date(year, month - 1, day);
  this.firstDayOfMonth = new Date(year, month - 1, 1);
  this.firstDayWeek    = this.firstDayOfMonth.getDay();

};

// Update calendar's localization dictionary.
// Arguments:
//   - localization(required): the localization dictionary.
Calendar.prototype.setLocalization = function (localization) {
    if (typeof(localization) !== 'object') throw ('a valid `localization` argument is required');
    this.localization = optionExtender(this.localization, localization);
};

// Return the calendar's localization dictionary.
Calendar.prototype.getLocalization = function () {
    return this.localization;
};

module.exports = Calendar;
