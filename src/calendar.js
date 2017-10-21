const chalk = require('chalk')
const optionExtender = require('optionextender')

const EN_US_LOCALIZATION = {
  culture: 'En-Us',
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  weekDaysNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  WeekDayFormat: ' {0} ',
  MonthDayFormat: ' 0{0} ',
  MonthDayFormatHigh: ' {0} ',
  MonthDayFormatEmpty: '----'
}

// Arguments:
//   - year(required): number of the year.
//   - month(required): number of the month, between 1 and 12.
//   - day(required): number of day, between 1 and 31.
const Calendar = (year, month, day) => {
  let days
  let date
  let firstDayOfMonth
  let firstDayWeek
  let localization

  // Set the calendar's date
  // Arguments:
  //   - year(required): number of the year.
  //   - month(required): number of the month, between 1 and 12.
  //   - day(required): number of day, between 1 and 31.
  const setDate = (year, month, day) => {
    if (typeof year !== 'number') {
      throw new TypeError('a valid `year` argument is required')
    }
    if (typeof month !== 'number') {
      throw new TypeError('a valid `month` argument is required')
    }
    if (typeof day !== 'number') {
      throw new TypeError('a valid `day` argument is required')
    }

    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    days = month === 2 && year % 4 === 0 ? 29 : monthDays[month - 1] // Leap year bugfix.
    date = new Date(year, month - 1, day)
    firstDayOfMonth = new Date(year, month - 1, 1)
    firstDayWeek = firstDayOfMonth.getDay()
  }

  // Assign a default values.
  localization = EN_US_LOCALIZATION
  setDate(year, month, day)

  const replace = (target, args) => {
    if (args === null || args.length <= 0) {
      return
    }

    for (let i = 0; i < args.length; ++i) {
      target = target.replace('{' + i + '}', args[i])
      return target
    }
  }

  // Update calendar's localization dictionary.
  // Arguments:
  //   - localization(required): the localization dictionary.
  const setLocalization = nextLocalization => {
    if (typeof localization !== 'object') {
      throw new TypeError('a valid `localization` argument is required')
    }

    localization = optionExtender(localization, nextLocalization)
  }

  // Generate and print the calendar.
  const show = () => {
    let dayBuffer
    let logBuffer
    let dayNum
    let weekIndex
    let isBufferFirstLine

    let headerColumns = ''
    let dayCount = 0
    const weekDays = 7

    for (let i = 0; i < weekDays; ++i) {
      logBuffer = ''

      for (let j = 0; j < weekDays; ++j) {
        isBufferFirstLine = i === 0

        if (isBufferFirstLine) {
          // Add the week day header.
          const headerDay = replace(localization.WeekDayFormat, [
            localization.weekDaysNames[j]
          ])

          headerColumns += chalk.white(headerDay)
        }

        weekIndex = weekDays * i
        dayCount = weekIndex + j + 1
        dayNum = dayCount - firstDayWeek

        // Validate and format the day string.
        if (dayNum > days) {
          continue
        } else if (dayNum.toString().length >= 2) {
          dayBuffer = replace(localization.MonthDayFormatHigh, [dayNum])
        } else {
          dayBuffer = replace(localization.MonthDayFormat, [dayNum])
        }

        if (dayNum <= 0) {
          dayBuffer = localization.MonthDayFormatEmpty.trap
        } else if (
          dayNum === date.getUTCDate() &&
          firstDayOfMonth.getMonth() === date.getMonth()
        ) {
          dayBuffer = chalk.bgWhite.black(dayBuffer)
        }

        logBuffer += dayBuffer
      }

      // Print the header.
      if (isBufferFirstLine) {
        console.log(chalk.bgBlue(headerColumns))
      }

      // Print the body.
      console.log(logBuffer)
    }
  }

  return {
    show,
    getDate: date,
    setDate,
    setLocalization,
    getLocalization: localization
  }
}

module.exports = Calendar
