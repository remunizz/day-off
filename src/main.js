// Summary:
//   This file have some examples of calendars usages.
// ########################################################################

// Exporting the calendar module.
var Calendar = require('./calendar');

class Main {
	constructor() {
		// Creating a new instace of the calendar.
		this.currentDay = new Date();
		this.inCalendar = new Calendar(this.currentDay.getFullYear(), this.currentDay.getMonth() +1, this.currentDay.getDate());
	}

	start() {
		// Showing the default calendar
		this.inCalendar.show();
	}
}

new Main().start();
