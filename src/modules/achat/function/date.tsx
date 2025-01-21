import TimeAgo from 'javascript-time-ago'
import fr from "javascript-time-ago/locale/fr"


/**
 * @param {Date} date 
 */
export function getOfferCreatedAt(date) {
  TimeAgo.addDefaultLocale(fr)
  const timeAgo = new TimeAgo('ru-RU')
  return timeAgo.format(new Date(date))
}