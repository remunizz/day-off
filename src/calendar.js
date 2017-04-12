// Summary:
//    Requirements, resources, addons and others stuffs requireds
var colors = require('colors');
var optionExtender = require('optionextender');

// Summary:
//   Calendar.
// Arguments:
//   - year(required): number of the specifed year.
//   - month(required): number of the specified month, between(1 - 12).
//   - day(required): number of day in the month, between(1 - 31).
var Calendar = function (year, month, day) {

  // Summary:
  //    Validation arguments before initalization to grant execution
  if (typeof(year) !== 'number')  throw ('a valid `year` argument is required');
  if (typeof(month) !== 'number') throw ('a valid `month` argument is required');
  if (typeof(day) !== 'number')   throw ('a valid `day` argument is required');

  // Summary:
  //    Localization, they shold store all language properties, the user may change the outoput names
  //    if necessary using the localization argument.
  this.localization = {
        culture             : 'En-Us'
      , monthNames          : ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']
      , weekDaysNames       : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
      , WeekDayFormat       : ' {0} '
      , MonthDayFormat      : ' 0{0} '
      , MonthDayFormatHigh  : ' {0} '
      , MonthDayFormatEmpty : '----'
  };

  // Summary:
  //    Application variables, all other configuarion properties.
  this.monthDays       = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  this.weekDays        = 7;
  this.days            = month == 2 && year % 4 == 0 ? 29 : this.monthDays[month - 1]; //Leap year bugfix
  this.date            = new Date(year, month - 1, day);
  this.firstDayOfMonth = new Date(year, month - 1, 1);
  this.firstDayWeek    = this.firstDayOfMonth.getDay(); // Store the first day of the week (to avoid function loop call)

  // Summary:
  //    helpers and utilities, a colections of functions to improve lecture and productvity
  this.replace         = function(target, args) {

    if (args ==  null || args.length <= 0) return;
    for (var i = 0; i < args.length; ++i) target = target.replace(('{' + i + '}'), args[i])
    return target;

  };

};

// Summary:
//    Prototypes, some functions of the object
// REMARKS: WANT TO BE REFACTORED.
Calendar.prototype.show = function () {

  var dayBuffer;
  var logBuffer;
  var dayNum;
  var headerColumns = '';
  var dayCount = 0;

  // Travelling between all week days
  for (var i = 0; i < this.weekDays; ++i) {

    // Clear log buffer
    logBuffer = '';

    // Construct day log
    for (var j = 0; j < this.weekDays; ++j) {

        // Construct header if is the first week
        if (i === 0) {
            headerColumns += this.replace(this.localization.WeekDayFormat, [this.localization.weekDaysNames[j]]).white;
        }

        // Set the day number
        dayCount = ((this.weekDays * i) + j) + 1;
        dayNum = dayCount - this.firstDayWeek;

        // Write the log with 2 digits
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

    // Print the header if is the first week
    if (i == 0) {
        console.log(headerColumns.bgBlue);
    }

    // Print the log day
    console.log(logBuffer);
  }

};

// Summary:
//   Get the current date from the calendar.
// Return:
//    Date : returns the the specfied calendars date.
Calendar.prototype.getDate = function () {

  return this.date;

};

// Summary:
//   Set's the specfied to the calendar, if the calendar is already displayCalendar
//   the method show needs to be called against.
// Arguments:
//   - year(required): number of the specifed year.
//   - month(required): number of the specified month, between(1 - 12).
//   - day(required): number of day in the month, between(1 - 31).
Calendar.prototype.setDate = function (year, month, day) {

  if (typeof(year) !== 'number')  throw ('a valid `year` argument is required');
  if (typeof(month) !== 'number') throw ('a valid `month` argument is required');
  if (typeof(day) !== 'number')   throw ('a valid `day` argument is required');

  this.days            = month == 2 && year % 4 == 0 ? 29 : this.monthDays[month - 1]; //Leap year bugfix
  this.date            = new Date(year, month - 1, day);
  this.firstDayOfMonth = new Date(year, month - 1, 1);
  this.firstDayWeek    = this.firstDayOfMonth.getDay();

};

// Summary:
//    Update the current localization to the specifed language.
// Arguments:
//    - localization(required): the specfied culture location information.
Calendar.prototype.setLocalization = function (localization) {

    if (typeof(localization) !== 'object') throw ('a valid `localization` argument is required');
    this.localization = optionExtender(this.localization, localization);

};

// Summary:
//    Update the current localization to the specifed language.
// Returns:
//    Returns the current localizatin configuration.
Calendar.prototype.getLocalization = function () {

    return this.localization;

};


// Exporting the calendar
module.exports = Calendar;
