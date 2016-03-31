// Summary:
//   This file have some examples of calendars usages.
// ########################################################################

// Exporting the calendar module.
var Calendar = require('./calendar');

// Creating a new instace of the calendar.
var current_day = new Date();
var inCalendar = new Calendar(current_day.getFullYear(), current_day.getMonth() +1, current_day.getDate());

// Showing the default calendar
inCalendar.show();

// Creating Brazilian dictionary.
var dictionaryBR = {
	      culture             : 'Pt-Br'
	    , monthNames          : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
	    , weekDaysNames       : ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
	    , WeekDayFormat       : ' {0} '
	    , MonthDayFormat      : '  {0}  '
	    , MonthDayFormatHigh  : ' {0}  '
	    , MonthDayFormatEmpty : ' ##  '
};

// Updating the localization.
inCalendar.setLocalization(dictionaryBR);

// Showing the contents of the calendar instance in console.
inCalendar.show();
// Display the calendars date.
// inCalendar.getDate();
