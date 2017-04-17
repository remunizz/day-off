// Summary:
//   This file have some examples of calendars usages.
// ########################################################################

var Calendar = require('../../src/calendar');

const dictionaryBR = {
	culture               : 'Pt-Br'
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
		// Customize the calendar dictionary
		if(this.dictionary != undefined) {
			this.inCalendar.setLocalization(this.dictionary);
		}

		// print the calendar
		this.inCalendar.show();
	}
}

new Main(dictionaryBR).start();
