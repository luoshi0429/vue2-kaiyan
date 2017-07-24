const MONTH_ABBR = ['Jan.', 'Feb.', 'Mar.', 'Api.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep', 'Oct.', 'Nov.', 'Dec.']

export const formatMonthDay = (date = new Date()) => {
  var month = date.getMonth()
  var day = date.getDate()
  return MONTH_ABBR[month] + day
}

export const formateDate = (miliSeconds) => {
  const date = new Date(miliSeconds)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  return `${year}-${month}-${day} ${hour}:${minute}`
}

export const handleSecond = (second) => {
  const minute = second / 60
  const left = second % 60
  const arr = String(minute).split('.')
  let res = arr[0] + '\'' + left + '"'
  return res
}
