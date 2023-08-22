import { Button, message, Popconfirm } from 'antd'
import { getMenuList, delMenu } from '@/api/index'
import { useRef, useState } from 'react'
import PageTable from '@/components/pageTable'
import PageForm from '@/components/pageForm'
import MenuForm from '@/components/menu/form'
import SvgIcon from '@/components/svgIcon'

function Menu() {
  const menuFromRef = useRef<FormDialog>()
  const pageTableRef = useRef<ComponentInstance>()
  const btnsProps: BtnsProps = [{ text: '创建菜单', type: 'primary', click: open }]
  const columns = [
    {
      title: '菜单名称',
      dataIndex: 'label',
      key: 'id',
    },
    {
      title: 'key',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '菜单图标',
      dataIndex: 'icon',
      key: 'icon',
      render: (value: string) => (value ? <SvgIcon name={value}></SvgIcon> : <></>),
    },
    {
      title: '权重',
      dataIndex: 'sort',
      key: 'sort',
      defaultSortOrder: 'ascend',
      width: 100,
      sorter: true,
    },
    {
      title: '操作',
      key: 'action',
      render: (_value: any, record: Record<string, any>) => (
        <>
          {record.menu_id ? (
            <></>
          ) : (
            <Button className="px-1" key="add" type="link" onClick={() => open(record, 'addChild')}>
              添加子菜单
            </Button>
          )}
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
  const [resData, setResData] = useState<Record<string, any>[]>([])

  function fetch(data: Record<string, any>) {
    console.log(data, '列表返回数据')
    setResData(data.data)
  }
  function refTable() {
    pageTableRef?.current?.getDate()
  }
  function open(row: Record<string, any>, type?: FromDialogType) {
    console.log(row)
    menuFromRef.current?.open(row, type)
  }
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
      <PageForm btnsProps={btnsProps} hideSearch></PageForm>
      <PageTable
        ref={pageTableRef}
        columns={columns}
        fetch={fetch}
        request={getMenuList}
        tableProps={{
          childrenColumnName: 'menus',
        }}></PageTable>

      <MenuForm ref={menuFromRef} menus={resData} affirm={refTable}></MenuForm>
    </>
  )
}

export default Menu
