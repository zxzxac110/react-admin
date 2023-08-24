import { useState, useImperativeHandle, forwardRef, useRef, useMemo, useEffect } from 'react'
import { Tree, Checkbox, Divider } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'
import type { DataNode } from 'antd/es/tree'
import { useStateMenuList } from '@/store/hooks/menu'
import './index.less'
// TODO 只支持二级  多级请使用tree
// 选择子集 自动添加父级ID
// 和菜单列表共有同一份数据。ps:只有拥有全部权限的人才能编辑权限
interface SelectTreeProps {
  data?: MenuList // 默认选中数据
}

interface CheckboxOption extends Option {
  children: CheckboxOption[] // 可选数据
}

// 获取渲染列表 和map列表
function getCheckOptions(list: MenuList): {
  options: CheckboxOption[]
} {
  const options: CheckboxOption[] = []
  list.forEach((e) => {
    const data = getCheckOptions(e.children || [])
    options.push({
      label: e.label + e.id,
      value: e.id,
      children: data.options,
    })
  })
  return {
    options,
  }
}

// 获取选中的map
function getCheckedMap(data?: MenuList): Record<string, boolean> {
  if (!data) {
    return {}
  }
  let obj: Record<string, boolean> = {}
  data.forEach((e) => {
    obj[e.id] = true
    if (e.children) {
      obj = {
        ...obj,
        ...getCheckedMap(e.children),
      }
    }
  })
  return obj
}

// 是否半选
function isIndeterminate(maps: Record<string, boolean>, data?: CheckboxOption[]) {
  let length = 0
  data?.forEach((e) => {
    if (maps[e.value]) length++
  })
  return length > 0 && length < (data?.length || -1)
}
const SelectTree = forwardRef((props: SelectTreeProps, ref) => {
  const menuList = useStateMenuList() // 菜单列表
  // 渲染列表   选中map
  const { options } = getCheckOptions(menuList)
  // 选中map
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({})
  // 选中列表
  const checkedList = useMemo(() => {
    console.log(Object.keys(checkedMap).filter((e) => checkedMap[e]))
    return Object.keys(checkedMap)
      .filter((e) => checkedMap[e])
      .map((e) => Number(e))
  }, [checkedMap])

  useEffect(() => {
    init()
  }, [props.data])
  function init() {
    setCheckedMap(getCheckedMap(props.data))
  }
  function onChange(val: CheckboxChangeEvent, e: CheckboxOption, parent?: CheckboxOption) {
    // 改变自己状态
    const checkedMapCopy = JSON.parse(JSON.stringify(checkedMap))
    checkedMapCopy[val.target.value] = val.target.checked
    // 改变子集状态
    e.children.forEach((e) => {
      checkedMapCopy[e.value] = val.target.checked
    })
    // 改变父集状态
    if (parent) {
      checkedMapCopy[parent.value] = parent.children.some((e) => checkedMapCopy[e.value])
    }
    setCheckedMap(checkedMapCopy)
  }
  function getCheckedList() {
    return checkedList
  }
  useImperativeHandle(ref, () => ({
    getCheckedList,
    init,
  }))
  return (
    <div className="select-tree">
      <Checkbox.Group value={checkedList}>
        {...options.map((e) => (
          <div className="d-flex align-start my-3">
            <Checkbox
              value={e.value}
              onChange={(val) => onChange(val, e)}
              indeterminate={isIndeterminate(checkedMap, e.children)}>
              {e.label}/{e.value}
            </Checkbox>
            <Divider type="vertical" />
            <div className="flex1">
              {...e.children.map((item) => (
                <Checkbox value={item.value} onChange={(val) => onChange(val, item, e)}>
                  {item.label}/{item.value}
                </Checkbox>
              ))}
            </div>
          </div>
        ))}
      </Checkbox.Group>
    </div>
  )
})

export default SelectTree
