import { useState, useEffect } from 'react'
import { Input } from 'antd'
import SvgIcon from '@/components/svgIcon'
import './index.less'
interface SvgIconListProps {
  onChange?: (v: string) => void
  active?: string
}

function SvgIconList(props: SvgIconListProps) {
  const files: Record<string, any> = import.meta.globEager('@/svg/*.svg')

  const names: string[] = []

  Object.keys(files).forEach((path: string) => {
    names.push(path.match(/\/src\/svg\/([a-zA-Z0-9-_]+)\.svg/)?.[1] as string)
  })

  const [list, setList] = useState(names) // 显示icon列表
  const [active, setActive] = useState('') // 当前选择icon

  function search(e: any) {
    const val = (e.target as HTMLInputElement)?.value || ''
    if (!val || !val.replace(/\s/g, '')) {
      setList(names)
      return
    }
    setList(names.filter((i) => i.includes(val)))
  }

  function onClick(str: string) {
    setActive(str === active ? '' : str)
    if (props.onChange) {
      props.onChange(str)
    }
  }

  useEffect(() => {
    setActive(props.active || '')
  }, [props.active])

  function genSvgIcons() {
    return list.map((e) => (
      <div className={active === e ? 'active box' : 'box'} onClick={() => onClick(e)}>
        <SvgIcon name={e}></SvgIcon>
        <div className="mt-2 gray--text line-overflow font-16">{e}</div>
      </div>
    ))
  }

  return (
    <div
      className="d-flex"
      style={{
        flexFlow: 'wrap',
      }}>
      <Input
        allowClear
        placeholder="搜索图标"
        style={{ width: '100%' }}
        className="mb-2"
        onChange={search}></Input>
      {...genSvgIcons()}
    </div>
  )
}

export default SvgIconList
