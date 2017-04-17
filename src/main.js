// Summary:
//   This file have some examples of calendars usages.
// ########################################################################

// Exporting the calendar module.
var Calendar = require('./calendar');

class Main {
	constructor() {
		// Creating a new instace of the calendar.
		this.current_day = new Date();
		this.inCalendar = new Calendar(this.current_day.getFullYear(), this.current_day.getMonth() +1, this.current_day.getDate());
	}

	start() {
		// Showing the default calendar
		this.inCalendar.show();
	}
}

new Main().start();
