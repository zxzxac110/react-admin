import { Button } from 'antd'

import { useMemo, useState } from 'react'

function Card() {
  const [message, setMessage] = useState('')
  const dialog = useMemo(() => {
    if (message) {
      return <div style={{ color: '#f00' }}>{message}</div>
    }
  }, [message])
  return (
    <div>
      <Button className="px-1" key="add" type="link" onClick={() => setMessage('123456')}>
        显示
      </Button>
      {dialog}
    </div>
  )
}

export default Card
