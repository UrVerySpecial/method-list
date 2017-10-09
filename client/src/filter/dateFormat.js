import moment from 'moment'

/**
 * Creates a moment correspondind to the date, and optional format given
 * @param  {string} value - the date to transform
 * @param  {string} format - optional format description
 * @return {moment}
 */
export default function (value, format) {
  if (!value) {
    return 'no date'
  }
  let formatString = format || 'L'
  return moment(new Date(value).toISOString())
    .format(formatString)
}
