import { Button, Popconfirm, message } from 'antd'
import { useMemo, useRef, useState } from 'react'
import { getMenuList, delMenu } from '@/api/index'
import PageForm from '@/components/pageForm'
import PageTable from '@/components/pageTable'
import DomeForm from '@/components/dome/form'
import SvgIcon from '@/components/svgIcon'
import { selectFormat } from '@/utils/index'
interface RoleForm {
  username: string
  [key: string]: any
}

function Role() {
  const dialog = useRef<FormDialog>() // 提交表单
  const pageTableRef = useRef<ComponentInstance>() // table
  const btnsProps: BtnsProps = [{ text: '新增权限', type: 'primary', click: open }] // 搜索内容附近项
  const [maps, setMaps] = useState<TableMaps>(null) // table返回的原map
  const [selectMaps, setSelectMaps] = useState<SelectMaps>(null) // 用于表单的map

  // 表单初始值 | 提交值
  const [formData, setFormDate] = useState<RoleForm>({
    username: '',
  })

  // 表单内部dom元素
  const formColumns: PageFormColumns = useMemo((): PageFormColumns => {
    return [
      {
        label: '名称',
        name: 'username',
        placeholder: '请输入',
        type: 'Input',
        style: {},
      },
    ]
  }, [])

  // table配置项
  const columns = useMemo(() => {
    return [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '角色',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
        render: (value: string) => <div>{value}</div>,
      },
      {
        title: '操作',
        key: 'action',
        render: (_value: any, record: Record<string, any>) => (
          <>
            <Button className="px-1" key="edit" type="link" onClick={() => open(record, 'edit')}>
              编辑
            </Button>
            <Popconfirm
              key="delete"
              placement="topRight"
              title="确定要删除吗?"
              onConfirm={() => del(record)}
              okText="确定"
              okType="danger"
              cancelText="取消">
              <Button className="px-1" type="link" danger key="delete">
                删除
              </Button>
            </Popconfirm>
          </>
        ),
      },
    ]
  }, [maps])
  // 列表返回数据
  const [resData, setResData] = useState<Record<string, any>[]>([])
  // 输入框点击搜索
  function fromSubmit(data: Record<string, any>) {
    setFormDate({
      ...(data as RoleForm),
    })
  }
  // 刷新table 现有过滤条件下重新请求数据
  function refTable() {
    pageTableRef?.current?.getDate()
  }
  // 列表请求返回数据
  function fetch(data: Record<string, any>) {
    console.log(data, '列表返回数据')
    setResData(data.data)
    setMaps(data.maps) // types // mode
    setSelectMaps(selectFormat(data.maps)) // types // mode
  }
  // 打开编辑新增弹窗
  function open(row: Record<string, any>, type?: FromDialogType) {
    dialog.current?.open(row, type)
  }

  // 删除
  async function del(row: Record<string, any>) {
    try {
      await delMenu(row.id)
      message.success('删除成功')
      refTable()
      return Promise.resolve()
    } catch (e) {
      return Promise.reject()
    }
  }

  return (
    <>
      <PageForm
        submit={fromSubmit}
        columns={formColumns}
        data={formData}
        btnsProps={btnsProps}></PageForm>

      <PageTable
        ref={pageTableRef}
        query={formData}
        columns={columns}
        fetch={fetch}
        request={getMenuList}
        tableProps={{
          childrenColumnName: 'none',
        }}></PageTable>

      <DomeForm ref={dialog} menus={resData} affirm={refTable} maps={selectMaps}></DomeForm>
    </>
  )
}

export default Role
