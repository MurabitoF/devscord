import daysjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export const getTimeAgo = (timestamp:number) => {
  daysjs.extend(relativeTime)
  return daysjs(timestamp).fromNow(true)
}
