import dayjs from 'dayjs'
import type { TimeRangePickerProps } from 'antd'
import type { Dayjs } from 'dayjs'

const format = 'YYYY/MM/DD HH:mm:ss'

export const rangePresets: TimeRangePickerProps['presets'] = [
  { label: '今天', value: [dayjs().startOf('day'), dayjs().endOf('day')] },
  {
    label: '昨天',
    value: [dayjs().add(-1, 'd').startOf('day'), dayjs().startOf('day')],
  },
  { label: '近七天', value: [dayjs().add(-7, 'd').startOf('day'), dayjs().startOf('day')] },
  {
    label: '最近一个月',
    value: [dayjs().add(-1, 'month').startOf('day'), dayjs().startOf('day')],
  },
  {
    label: '最近三个月',
    value: [dayjs().add(-3, 'month').startOf('day'), dayjs().startOf('day')],
  },
]

// 'YYYY/MM/DD HH:mm:ss'转dayjs
export function timeFormatTransferDayjs(time: string) {
  return dayjs(new Date(time))
}

// dayjs转'YYYY/MM/DD HH:mm:ss'
export function formatDayjs(time: Dayjs, str?: string) {
  if (!time) {
    return ''
  }
  if (time) {
    return dayjs(time).format(str || format)
  } else {
    return ''
  }
}