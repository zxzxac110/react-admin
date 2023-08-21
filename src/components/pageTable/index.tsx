import { Tag, Space, Table } from 'antd'
import type { TablePaginationConfig, SorterResult, FilterValue } from 'antd'
import { useState, useEffect } from 'react'
import { fieldShowPage } from '@/utils/index'
interface PageTableProps {
  query?: Record<string, any> // 外部请求参数
  defaultTableParams?: TableParams // 表格默认请求参数
  columns: Record<string, any>[] // 表格请求参数
  fetch: (v: Record<string, any>) => void // 请求返回结果
  request: (v: Record<string, any>) => Promise<Record<string, any>> // 获取请求
}

function PageTable(props: PageTableProps) {
  const [data, setData] = useState<Record<string, any>[]>([])
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0)
  // 请求参数
  const [tableParams, setTableParams] = useState<Record<string, any>>(
    props.defaultTableParams || {
      current: 1,
      pageSize: 20,
    }
  )
  async function getDate() {
    console.log('请求数据')
    console.log({
      ...tableParams,
      ...(props.query || {}),
    })
    setLoading(true)
    const res = await props.request({
      ...tableParams,
      ...(props.query || {}),
    })
    setLoading(false)
    setData(res.data)
    setTotal(res?.meta?.total || 0)
    props.fetch(res)
  }

  function onChange(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<Record<string, any>>
  ) {
    setTableParams({
      ...tableParams,
      current: pagination.current,
      pageSize: pagination.pageSize,
      field: sorter.field,
      order: sorter.order, // order: 'descend' / "ascend" / undefined,
    })
  }

  useEffect(() => {
    getDate()
  }, [props.query, tableParams])
  return (
    <div className="page-box flex1 page-table flex1 mb-4" style={{ overflow: 'hidden' }}>
      <div style={{ height: '100%', overflow: 'auto' }}>
        <Table
          loading={loading}
          bordered
          onChange={onChange}
          style={{ height: '100%' }}
          columns={props.columns}
          pagination={{
            total: total,
            pageSize: tableParams.pageSize,
            current: tableParams.current,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共${total}条`,
          }}
          dataSource={data}
          sticky
          // scroll={{ y: 400 }}
        />
      </div>
    </div>
  )
}

export default PageTable
