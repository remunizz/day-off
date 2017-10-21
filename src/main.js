const dayOff = require('./calendar')

const main = () => {
  const currentDate = new Date()
  const calendar = dayOff(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate()
  )

  return {
    start: () => calendar.show()
  }
}

main().start()
