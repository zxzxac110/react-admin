import { useState, useImperativeHandle, forwardRef, useRef, useMemo, useEffect } from 'react'
import { Button } from 'antd'
import MyForm from '@/components/form'
import SelectTree from '@/components/menu/selectTree'
import { Modal, message, FormInstance } from 'antd'
import { addMenu, editMenu } from '@/api'
interface roleFormProps {
  affirm: () => void
  maps?: SelectMaps
}
const titleType: Record<string, any> = {
  add: '新增角色',
  edit: '编辑角色',
}

const MenuModal = forwardRef((props: roleFormProps, ref) => {
  const [show, setShow] = useState(false) // 开关
  const [type, setType] = useState('') // 类型
  const [loading, setLoading] = useState(false)
  const [initialValue, setInitialValue] = useState<Record<string, any>>({}) // 传递初始值 || 页面上修改的非表单内容
  const [formRef, setFormRef] = useState<FormInstance | null>(null) // form实例
  const formColumns = useMemo((): PageFormColumns => {
    return [
      {
        label: '名称',
        name: 'name',
        placeholder: '请输入',
        type: 'Input',
        formItemProps: {
          rules: [{ required: true, message: '请输入角色名称' }],
        },
      },
    ]
  }, [initialValue, type, props.maps])

  const selectTreeRef = useRef<ComponentInstance>()
  function open(row: Record<string, any>, type?: FromDialogType) {
    formRef && formRef.resetFields()
    let data = {}
    if (type === 'edit') {
      data = {
        ...row,
      }
    }
    formRef?.setFieldsValue(data)
    selectTreeRef?.current?.init()
    setInitialValue(data)
    setType(type || 'add')
    setShow(true)
  }
  function submit() {
    formRef &&
      formRef.validateFields().then(async (values) => {
        const data = {
          ...values, // 表单数据
          id: initialValue.id,
          ids: selectTreeRef?.current?.getCheckedList(),
        }
        setLoading(true)
        if (initialValue.id) {
          await editMenu(initialValue.id, data)
          message.success('编辑成功')
        } else {
          await addMenu(data)
          message.success('添加成功')
        }
        setLoading(false)
        onCancel()
        props.affirm()
      })
  }
  const onCancel = () => {
    setShow(false)
  }

  useEffect(() => {
    // 解决第一次open赋值不上问题
    formRef?.setFieldsValue(initialValue)
  }, [formRef])
  // 在子组件中暴露abc函数给父组件使用
  useImperativeHandle(ref, () => ({
    open,
  }))
  return (
    <>
      <Modal
        maskClosable={false}
        centered
        title={titleType[type] as string}
        open={show}
        onCancel={onCancel}
        footer={[
          <Button key="back" onClick={onCancel}>
            取消
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={submit}>
            确定
          </Button>,
        ]}>
        <MyForm
          handleInstance={setFormRef}
          columns={formColumns}
          props={{
            labelAlign: 'left',
            labelCol: { span: 4 },
          }}></MyForm>
        <div className="mb-2 font-bold">菜单权限 ：</div>
        <SelectTree ref={selectTreeRef} data={initialValue.menus}></SelectTree>
      </Modal>
    </>
  )
})

export default MenuModal
