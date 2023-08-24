import { Button, Popconfirm, message } from 'antd'
import type { TimeRangePickerProps } from 'antd'
import { useEffect, useMemo, useRef, useState } from 'react'
import { getMenuList, delMenu } from '@/api/index'
import { getQuery } from '@/utils/index'
import PageForm from '@/components/pageForm'
import PageTable from '@/components/pageTable'
import DomeForm from '@/components/dome/form'
import SvgIcon from '@/components/svgIcon'
import type { Dayjs } from 'dayjs'
import { rangePresets, formatDayjs } from '@/utils/time'
import { selectFormat } from '@/utils/index'
interface CardForm {
  username: string
  gender: string
  create_time: Dayjs[]
  create_time2: Dayjs[]
  start_time: string
  end_time: string
  start_time2: string
  end_time2: string
  [key: string]: any
}

function Card() {
  const dialog = useRef<FormDialog>() // 提交表单
  const pageTableRef = useRef<ComponentInstance>() // table
  const btnsProps: BtnsProps = [{ text: '创建菜单', type: 'primary', click: open }] // 搜索内容附近项
  const time = rangePresets?.[0]?.value as Dayjs[]
  const [maps, setMaps] = useState<TableMaps>(null) // table返回的原map
  const [selectMaps, setSelectMaps] = useState<SelectMaps>(null) // 用于表单的map

  // 表单初始值 | 提交值
  const [formData, setFormDate] = useState<CardForm>({
    username: '姓名2',
    gender: '1',
    create_time: time,
    create_time2: [...time],
    start_time: formatDayjs(time[0]),
    end_time: formatDayjs(time[1]),
    start_time2: formatDayjs(time[0]),
    end_time2: formatDayjs(time[1]),
    ...getQuery(),
  })

  // 表单内部dom元素
  const formColumns: PageFormColumns = useMemo((): PageFormColumns => {
    return [
      {
        label: '姓名',
        name: 'username',
        placeholder: '请输入',
        type: 'Input',
        style: {},
      },
      {
        label: '类型',
        name: 'type',
        placeholder: '请选择',
        type: 'Select',
        style: { width: 100 },
        options: selectMaps?.types,
      },
      {
        label: '性别',
        name: 'gender',
        placeholder: '请选择',
        type: 'Select',
        style: { width: 100 },
        options: [
          { value: '1', label: '男' },
          { value: '2', label: '女' },
        ],
      },
      {
        label: '创建时间',
        name: 'create_time',
        placeholder: ['开始时间', '结束时间'],
        type: 'RangePicker',
        style: { width: '350px' },
      },
      {
        label: '创建时间2',
        name: 'create_time2',
        type: 'RangePicker',
        style: { width: '350px' },
      },
    ]
  }, [selectMaps])

  // table初始值
  const [tableParams, setTableParams] = useState<TableParams>({
    current: 2,
    pageSize: 50,
    field: 'id',
    order: 'descend',
  })

  // table配置项
  const columns = useMemo(() => {
    return [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        defaultSortOrder: 'descend',
        sorter: true,
      },
      {
        title: '菜单名称',
        dataIndex: 'label',
        key: 'label',
      },
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        render: (value: number | string) => <div>{maps?.types?.[value as number]}</div>,
      },
      {
        title: 'key',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: '访问路径',
        dataIndex: 'path',
        key: 'path',
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
              <Button
                className="px-1"
                key="add"
                type="link"
                onClick={() => open(record, 'addChild')}>
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
  }, [maps])
  //
  const [resData, setResData] = useState<Record<string, any>[]>([])
  // 输入框点击搜索
  function fromSubmit(data: Record<string, any>) {
    setFormDate({
      ...(data as CardForm),
      start_time: formatDayjs(data.create_time?.[0]),
      end_time: formatDayjs(data.create_time?.[1]),
      start_time2: formatDayjs(data.create_time2?.[0]),
      end_time2: formatDayjs(data.create_time2?.[1]),
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
        defaultTableParams={tableParams}></PageTable>

      <DomeForm ref={dialog} menus={resData} affirm={refTable} maps={selectMaps}></DomeForm>
    </>
  )
}

export default Card
