var Calendar = require('./calendar');

class Main {
	constructor() {
		this.currentDay = new Date();
		// Create a new instance of the calendar.
		this.inCalendar = new Calendar(this.currentDay.getFullYear(), this.currentDay.getMonth() +1, this.currentDay.getDate());
	}

	start() {
		// Print the calendar 
		this.inCalendar.show();
	}
}

new Main().start();
