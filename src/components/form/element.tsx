import { useEffect, useMemo, useCallback, ReactNode } from 'react'
import { Form, Input, Select, DatePicker, InputNumber } from 'antd'
import type { TimeRangePickerProps, FormInstance } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn') // 日期国际化
const format = 'YYYY/MM/DD HH:mm:ss'

const rangePresets: TimeRangePickerProps['presets'] = [
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

function genInputNumber(e: PageFormColumn): ReactNode {
  return <InputNumber {...e.props}></InputNumber>
}
function genInput(e: PageFormColumn): ReactNode {
  return <Input allowClear placeholder={(e.placeholder as string) || '请输入'} {...e.props} />
}
function genSelect(e: PageFormColumn): ReactNode {
  return (
    <Select
      allowClear
      placeholder={(e.placeholder as string) || '请输入'}
      style={e.style}
      options={e.options}
      {...e.props}></Select>
  )
}

function genRangePicker(e: PageFormColumn): ReactNode {
  console.log(666)
  return (
    <DatePicker.RangePicker
      presets={rangePresets}
      style={{ width: '350px' }}
      showTime={{
        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('00:00:00', 'HH:mm:ss')],
      }}
      placeholder={(e.placeholder as [string, string]) || ['开始时间', '结束时间']}
      format={format}
    />
  )
}

function genChildren(e: PageFormColumn): ReactNode {
  return e.children
}

function FormElement(props: PageFormColumn) {
  const com = {
    Input: genInput,
    Select: genSelect,
    RangePicker: genRangePicker,
    InputNumber: genInputNumber,
    children: genChildren,
  }[props.type]
  return com ? com(props) : <></>
}

export default FormElement
