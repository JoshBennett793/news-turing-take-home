export function convertDate(date) {
  // from 2023-10-31T14:00:00Z to 31 Oct 2023
  const dateArr = date.split('-')
  const year = dateArr[0]
  const month = dateArr[1]
  const day = dateArr[2].split('T')[0]
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const monthName = months[parseInt(month) - 1]
  return `${day} ${monthName} ${year}`
}
