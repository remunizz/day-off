const dayOff = require('../../src/calendar')

const PT_BR_LOCALIZATION = {
  culture: 'Pt-Br',
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  weekDaysNames: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  WeekDayFormat: ' {0} ',
  MonthDayFormat: '  {0}  ',
  MonthDayFormatHigh: ' {0}  ',
  MonthDayFormatEmpty: ' ##  '
}

const main = dictionary => {
  const currentDate = new Date()
  const calendar = dayOff(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate()
  )

  // Customize the calendar's localization dictionary
  if (dictionary !== undefined) {
    calendar.setLocalization(dictionary)
  }

  return {
    start: () => calendar.show()
  }
}

main(PT_BR_LOCALIZATION).start()
