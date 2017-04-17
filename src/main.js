var Calendar = require('./calendar')

const Main = () => {
  const currentDate = new Date()
  const calendar = Calendar( currentDate.getFullYear(), currentDate.getMonth() +1, currentDate.getDate() )

	return ({
		start: () => calendar.show()
	})
}

Main().start()
