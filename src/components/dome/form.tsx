import { useState, useImperativeHandle, forwardRef, useRef, useMemo, useEffect } from 'react'
import { Button } from 'antd'
import MyForm from '@/components/form'
import SvgDialog from '@/components/svgIcon/dialog'
import SvgIcon from '@/components/svgIcon/index'
import { Modal, message, FormInstance } from 'antd'
import { addMenu, editMenu } from '@/api'
interface MenuFormProps {
  menus: Record<string, any>[]
  affirm: () => void
}
const titleType: Record<string, any> = {
  add: '新增菜单',
  addChild: '添加子菜单',
  edit: '修改菜单信息',
}

const MenuModal = forwardRef((props: MenuFormProps, ref) => {
  const [show, setShow] = useState(false) // 开关
  const [type, setType] = useState('') // 类型
  const [loading, setLoading] = useState(false)
  const [initialValue, setInitialValue] = useState<Record<string, any>>({}) // 传递初始值 || 页面上修改的非表单内容
  const [formRef, setFormRef] = useState<FormInstance | null>(null) // form实例
  const formColumns = useMemo((): PageFormColumns => {
    return [
      {
        label: '父级菜单',
        name: 'menu_id',
        placeholder: '请选择',
        type: 'Select',
        options: props.menus.map((e: Record<string, any>) => ({
          value: e.id,
          label: e.label,
        })),
        props: {
          disabled: initialValue.id && !initialValue.menu_id,
        },
      },
      {
        label: '菜单标题',
        name: 'label',
        placeholder: '请输入',
        type: 'Input',
        formItemProps: {
          rules: [{ required: true, message: '请输入菜单标题' }],
          extra: <div>菜单标题是必填的</div>,
        },
      },
      {
        label: 'Key',
        name: 'key',
        placeholder: '请输入',
        type: 'Input',
      },
      {
        label: '访问路径',
        name: 'path',
        placeholder: '请输入',
        type: 'Input',
      },
      {
        label: '权重',
        name: 'sort',
        placeholder: '请输入',
        type: 'InputNumber',
      },
      {
        label: '图标',
        name: 'icon',
        type: 'children',
        children: (
          <div className="d-flex align-center">
            {initialValue.icon ? (
              <SvgIcon name={initialValue.icon} myClass="font-26 mr-2"></SvgIcon>
            ) : (
              <></>
            )}
            <Button type="primary" size="small" onClick={changeShowIconList}>
              选择
            </Button>
          </div>
        ),
      },
    ]
  }, [props.menus, initialValue, type])

  // 打开icon弹窗
  const svgDialogRef = useRef<ComponentInstance>()
  function changeShowIconList() {
    svgDialogRef.current?.open(initialValue.icon || '') //
  }
  function iconChange(v: string) {
    setInitialValue({
      ...initialValue,
      icon: v,
    })
  }
  //
  function open(row: Record<string, any>, type?: FromDialogType) {
    console.log(row, type)
    formRef && formRef.resetFields()
    let data = {}
    if (type === 'edit') {
      data = row
    } else if (type === 'addChild') {
      data = { menu_id: row.id }
    }
    formRef?.setFieldsValue(data)
    setInitialValue(data)
    setType(type || 'add')
    setShow(true)
  }
  //
  function submit() {
    formRef &&
      formRef.validateFields().then(async (values) => {
        const data = {
          ...values, // 表单数据
          ...initialValue, // 非表单数据
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
        // TODO
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
      </Modal>
      <SvgDialog ref={svgDialogRef} submit={iconChange}></SvgDialog>
    </>
  )
})

export default MenuModal
