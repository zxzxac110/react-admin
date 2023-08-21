import { Space } from 'antd'
import 'dayjs/locale/zh-cn'
import PageTable from '@/components/pageTable'
import { getMenuList } from '@/api/index'
import SvgIcon from '@/components/svgIcon'
function Menu() {
  const columns = [
    {
      title: '菜单名称',
      dataIndex: 'label',
      key: 'label',
    },
    // {
    //   title: 'key',
    //   dataIndex: 'name',
    //   key: 'name',
    // },
    // {
    //   title: '菜单图标',
    //   dataIndex: 'icon',
    //   key: 'icon',
    //   render: (_, { configure }) => <SvgIcon name={configure.icon}></SvgIcon>,
    // },
    // {
    //   title: '权重',
    //   dataIndex: 'sort',
    //   key: 'sort',
    //   defaultSortOrder: 'ascend',
    //   width: 100,
    //   sorter: true,
    // },
    // {
    //   title: '操作',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>修改</a>
    //       <a>删除</a>
    //     </Space>
    //   ),
    // },
  ]

  function fetch(data: Record<string, any>) {
    console.log(data, '列表返回数据')
  }
  return (
    <>
      <PageTable columns={columns} fetch={fetch} request={getMenuList}></PageTable>
    </>
  )
}

export default Menu
