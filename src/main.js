// Summary:
//   This file have some examples of calendars usages.
// ########################################################################

// Exporting the calendar module.
var Calendar = require('./calendar');

// Creating a new instace of the calendar.
var inCalendar = new Calendar(2016, 02, 29);
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
