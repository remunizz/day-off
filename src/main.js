// Summary:
//   This file have some examples of calendars usages.
// ########################################################################

// Exporting the calendar module.
var Calendar = require('./calendar');

// Creating a new instace of the calendar.
var inCalendar = new Calendar(2016, 03, 05);

// Updating the localization.
inCalendar.setLocalization({
      culture             : 'Pt-Br'
    , monthNames          : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    , weekDaysNames       : ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    , WeekDayFormat       : ' {0} '
    , MonthDayFormat      : '  {0}  '
    , MonthDayFormatHigh  : ' {0}  '
    , MonthDayFormatEmpty : '     '
});

// Showing the contents of the calendar instance in console.
inCalendar.show();
// Display the calendars date.
// inCalendar.getDate();
