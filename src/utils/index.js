const MONTH_ABBR = ['Jan.', 'Feb.', 'Mar.', 'Api.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep', 'Oct.', 'Nov.', 'Dec.']

export const formatMonthDay = (date = new Date()) => {
  var month = date.getMonth()
  var day = date.getDate()
  return MONTH_ABBR[month] + day
}

export const handleSecond = (second) => {
  const minute = second / 60
  const left = second % 60
  const arr = String(minute).split('.')
  let res = arr[0] + '\'' + left + '"'
  return res
}
