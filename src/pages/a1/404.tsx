import { Spin } from 'antd'

function Card() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Spin size="large"></Spin>
    </div>
  )
}

export default Card
