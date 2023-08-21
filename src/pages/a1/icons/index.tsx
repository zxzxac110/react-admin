import SvgIcon from '@/components/svgIcon'
import './index.less'
function Icons() {
  const files: Record<string, any> = import.meta.globEager('@/svg/*.svg')

  const name: string[] = []

  Object.keys(files).forEach((path: string) => {
    name.push(path.match(/\/src\/svg\/([a-zA-Z0-9-_]+)\.svg/)?.[1] as string)
  })
  console.log(name)

  function genSvgIcons() {
    return name.map((e) => (
        <div className="box">
          <SvgIcon name={e}></SvgIcon>
          <div className="mt-2 gray--text line-overflow font-16">{e}</div>
        </div>
      ))
  }
  return (
    <div className="flex1 page-box">
      <div
        className="d-flex"
        style={{
          flexFlow: 'wrap',
        }}>
        {...genSvgIcons()}
      </div>
    </div>
  )
}

export default Icons
