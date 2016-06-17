// Summary:
//   This file have some examples of calendars usages.
// ########################################################################

// Exporting the calendar module.
var Calendar = require('./calendar');

// Creating Brazilian dictionary.
const dictionaryBR = {
		culture             : 'Pt-Br'
		, monthNames          : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
		, weekDaysNames       : ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
		, WeekDayFormat       : ' {0} '
		, MonthDayFormat      : '  {0}  '
		, MonthDayFormatHigh  : ' {0}  '
		, MonthDayFormatEmpty : ' ##  '
};

class Main {
	constructor(dictionary) {
		// Creating a new instace of the calendar.
		this.current_day = new Date();
		this.inCalendar = new Calendar(this.current_day.getFullYear(), this.current_day.getMonth() +1, this.current_day.getDate());
		this.dictionary = dictionary;
	}

	start() {
		// Showing the default calendar
		this.inCalendar.show();

		if(this.dictionary != undefined) {
			// Updating the localization.
			this.inCalendar.setLocalization(this.dictionary);

			// Showing the contents of the calendar instance in console.
			this.inCalendar.show();
			// Display the calendars date.
			// inCalendar.getDate();
		}
	}
}

new Main(dictionaryBR).start();
