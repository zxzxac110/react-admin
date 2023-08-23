// 页面上的搜索表单

import { Form, Button } from 'antd'
import type { FormInstance } from 'antd'
import { useRef, useMemo } from 'react'
import GenFromElement from '@/components/form/element'
interface PageFormProps {
  data?: Record<string, any>
  columns?: PageFormColumns
  submit?: (v: Record<string, any>) => void
  hideSearch?: boolean
  btnsProps?: BtnsProps
}
let timeWhetherChange = true // 确保用户已经执行完了操作锁

function PageForm(props: PageFormProps) {
  const formRef = useRef<FormInstance>(null)
  function submit() {
    const data = formRef.current?.getFieldsValue() || {}
    if (props.submit) {
      props.submit(data)
    }
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

  function getFromValue() {
    return formRef.current?.getFieldsValue() || {}
  }

  function pageGenFromElement(e: PageFormColumn) {
    const elementPosps = {
      Input: { onPressEnter: submit },
      Select: { onChange: submit },
      RangePicker: { onOpenChange: onOpenChange },
    }

    return GenFromElement({
      ...e,
      props: {
        ...e.props,
        ...(elementPosps[e.type] || {}),
      },
    })
  }

  const formBody = useMemo(() => {
    return (
      props.columns?.map((e: PageFormColumn) => {
        return (
          <Form.Item label={e.label} name={e.name} {...e.formItemProps}>
            {pageGenFromElement(e)}
          </Form.Item>
        )
      }) || []
    )
  }, [props.columns])

  const formBtns = useMemo(() => {
    return (
      props.btnsProps?.map((e: BtnProps) => {
        return (
          <Button onClick={() => e.click(getFromValue())} type={e.type}>
            {e.text}
          </Button>
        )
      }) || []
    )
  }, [props.btnsProps])

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
        {props.hideSearch ? (
          <></>
        ) : (
          <Button className="mr-4" type="primary" onClick={submit}>
            搜索
          </Button>
        )}
        {...formBtns}
      </div>
    </div>
  )
}

export default PageForm
