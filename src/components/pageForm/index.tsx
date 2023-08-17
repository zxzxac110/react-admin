import { Form, Input, Select, DatePicker, Button } from 'antd'
import type { TimeRangePickerProps, FormInstance } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { useRef, useState } from 'react'

dayjs.locale('zh-cn') // 日期国际化
const format = 'YYYY/MM/DD HH:mm:ss'

function PageForm() {
  const formRef = useRef<FormInstance>(null)
  const [timeWhetherChange, setTimeWhetherChange] = useState(false)
  const [formData, setFormData] = useState({
    username: '姓名',
    gender: '1',
    create_time: [dayjs().startOf('day'), dayjs().endOf('day')],
    start_time: dayjs().startOf('day').format('YYYY/MM/DD HH:mm:ss'),
    end_time: dayjs().endOf('day').format('YYYY/MM/DD HH:mm:ss'),
  })

  function submit() {
    const data = formRef.current?.getFieldsValue() || {}
    console.log({
      ...data,
      start_time: data.create_time ? dayjs(data.create_time[0]).format(format) : '',
      end_time: data.create_time ? dayjs(data.create_time[1]).format(format) : '',
    })
  }

  // 日期时间选择器
  function onPickerChange() {
    setTimeWhetherChange(true)
  }
  // 时间选择器打开关闭
  // 确保用户已经执行完了操作
  // 定时器 延迟触发
  function onOpenChange(open: boolean) {
    if (open) {
      setTimeWhetherChange(false)
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

  return (
    <div className="page-box pb-0">
      <Form ref={formRef} layout="inline" initialValues={formData}>
        <Form.Item label="姓名" name="username">
          <Input allowClear placeholder="请输入" onPressEnter={submit} />
        </Form.Item>

        <Form.Item label="性别" name="gender">
          <Select
            allowClear
            placeholder="请选择"
            onChange={submit}
            style={{ width: 100 }}
            options={[
              { value: '1', label: '男' },
              { value: '2', label: '女' },
            ]}></Select>
        </Form.Item>

        <Form.Item label="创建时间" name="create_time">
          <DatePicker.RangePicker
            presets={rangePresets}
            style={{ width: '350px' }}
            showTime={{
              defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('00:00:00', 'HH:mm:ss')],
            }}
            placeholder={['开始时间', '结束时间']}
            format={format}
            onChange={onPickerChange}
            onOpenChange={onOpenChange}
          />
        </Form.Item>
        <Form.Item label="创建时间" name="create_time">
          <DatePicker.RangePicker
            presets={rangePresets}
            style={{ width: '350px' }}
            showTime={{
              defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('00:00:00', 'HH:mm:ss')],
            }}
            placeholder={['开始时间', '结束时间']}
            format={format}
            onChange={onPickerChange}
            onOpenChange={onOpenChange}
          />
        </Form.Item>
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
