import { Form, Input, Select, DatePicker, Button } from 'antd'
import type { TimeRangePickerProps, FormInstance } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { useRef, useMemo, useCallback, ReactNode } from 'react'

dayjs.locale('zh-cn') // 日期国际化
const format = 'YYYY/MM/DD HH:mm:ss'
interface PageFormProps {
  data: Record<string, any>
  columns: PageFormColumns
  submit: (v: Record<string, any>) => void
}
let timeWhetherChange = true // 确保用户已经执行完了操作锁

function PageForm(props: PageFormProps) {
  const formRef = useRef<FormInstance>(null)
  function submit() {
    const data = formRef.current?.getFieldsValue() || {}
    props.submit(data)
  }

  function onPickerChange(changedValues: Record<string, any>) {
    timeWhetherChange = true
    // 点击清除日期时间选择器
    if (JSON.stringify(changedValues).indexOf('null') > -1) {
      submit()
    }
  }
  // 时间选择器打开关闭
  // 确保用户已经执行完了操作
  // 定时器 延迟触发
  function onOpenChange(open: boolean) {
    if (open) {
      timeWhetherChange = false
    } else if (timeWhetherChange) {
      setTimeout(() => {
        submit()
      }, 0)
    }
  }

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

  const genFromElement = useCallback((e: PageFormColumn): ReactNode => {
    const com = {
      Input: genInput,
      Select: genSelect,
      RangePicker: genRangePicker,
    }[e.type]
    return com ? com(e) : <></>
  }, [])

  const formBody = useMemo(() => {
    return props.columns.map((e: PageFormColumn) => {
      return (
        <Form.Item label={e.label} name={e.name}>
          {genFromElement(e)}
        </Form.Item>
      )
    })
  }, [props.columns, genFromElement])

  function genInput(e: PageFormColumn): ReactNode {
    return (
      <Input allowClear placeholder={(e.placeholder as string) || '请输入'} onPressEnter={submit} />
    )
  }
  function genSelect(e: PageFormColumn): ReactNode {
    return (
      <Select
        allowClear
        placeholder={(e.placeholder as string) || '请输入'}
        onChange={submit}
        style={e.style}
        options={e.options}></Select>
    )
  }
  function genRangePicker(e: PageFormColumn): ReactNode {
    return (
      <DatePicker.RangePicker
        presets={rangePresets}
        style={{ width: '350px' }}
        showTime={{
          defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('00:00:00', 'HH:mm:ss')],
        }}
        placeholder={(e.placeholder as [string, string]) || ['开始时间', '结束时间']}
        format={format}
        onOpenChange={onOpenChange}
      />
    )
  }
  return (
    <div id="page-form" className="page-box pb-0">
      <Form
        ref={formRef}
        layout="inline"
        initialValues={props.data}
        onValuesChange={onPickerChange}>
        {...formBody}
      </Form>
      <div>
        <Button className="mr-4" type="primary" onClick={submit}>
          搜索
        </Button>
        <Button type="primary">创建</Button>
      </div>
    </div>
  )
}

export default PageForm
