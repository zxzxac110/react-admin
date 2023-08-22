import {
  ReactNode,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
  useMemo,
} from 'react'
import SvgList from '@/components/svgIcon/list'
import { Modal, Select, message, FormInstance, Form } from 'antd'

// import './index.less'
interface svgDialogProps {
  submit?: (v: string) => void
}

const SvgIconDialog = forwardRef((props: svgDialogProps, ref) => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')

  const onCancel = () => {
    // form && form.resetFields();
    setShow(false)
  }
  function open(v?: string) {
    setValue(v || '')
    setShow(true)
  }
  function change(v: string) {
    setValue(v)
  }
  function submit() {
    props?.submit?.(value)
    onCancel()
  }
  // 在子组件中暴露abc函数给父组件使用
  useImperativeHandle(ref, () => ({
    open,
  }))

  return (
    <>
      <Modal
        maskClosable={false}
        centered
        title="选择图标"
        open={show}
        okText="确认"
        cancelText="取消"
        onCancel={onCancel}
        onOk={submit}
        width={1000}>
        <SvgList onChange={change} active={value}></SvgList>
      </Modal>
    </>
  )
})

export default SvgIconDialog
