import { Form, Input, Select, DatePicker, Button, Tag, Space, Table } from 'antd'
import type { TablePaginationConfig, SorterResult, FilterValue } from 'antd'
import 'dayjs/locale/zh-cn'
import { useRef, useState, useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getQuery } from '@/utils/index'
import PageForm from '@/components/pageForm'
import PageTable from '@/components/pageTable'
import dayjs from 'dayjs'
import { getMenuList } from '@/api/index'
import SvgIcon from '@/components/svgIcon'
const format = 'YYYY/MM/DD HH:mm:ss'

interface CardForm {
  username: string
  gender: string
  create_time: dayjs.Dayjs[]
  start_time: string
  end_time: string
  [key: string]: any
}

function Card() {
  // 表单初始值 | 提交值
  const [formData, setFormDate] = useState<CardForm>({
    username: '姓名2',
    gender: '1',
    create_time: [dayjs().startOf('day'), dayjs().endOf('day')],
    create_time2: [dayjs().startOf('day'), dayjs().endOf('day')],
    start_time: dayjs().startOf('day').format('YYYY/MM/DD HH:mm:ss'),
    end_time: dayjs().endOf('day').format('YYYY/MM/DD HH:mm:ss'),
    ...getQuery(),
  })
  // 表单内部dom元素
  const formColumns: PageFormColumns = [
    {
      label: '姓名',
      name: 'username',
      placeholder: '请输入',
      type: 'Input',
      style: {},
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

  // table初始值
  const [tableParams, setTableParams] = useState<TableParams>({
    current: 2,
    pageSize: 50,
    field: 'age',
    order: 'ascend',
  })

  const columns = [
    {
      title: '菜单名称',
      dataIndex: 'label',
      key: 'label',
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
      render: (_, { icon }) => <SvgIcon name={icon}></SvgIcon>,
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
      render: (_, record) => (
        <Space size="middle">
          <a>修改</a>
          <a>删除</a>
        </Space>
      ),
    },
  ]

  function fromSubmit(data: Record<string, any>) {
    setFormDate({
      ...(data as CardForm),
      start_time: data.create_time ? dayjs(data.create_time[0]).format(format) : '',
      end_time: data.create_time ? dayjs(data.create_time[1]).format(format) : '',
    })
  }

  function fetch(data: Record<string, any>) {
    console.log(data, '列表返回数据')
  }
  return (
    <>
      <PageForm submit={fromSubmit} columns={formColumns} data={formData}></PageForm>
      <PageTable
        query={formData}
        defaultTableParams={tableParams}
        columns={columns}
        fetch={fetch}
        request={getMenuList}></PageTable>
    </>
  )
}

export default Card
