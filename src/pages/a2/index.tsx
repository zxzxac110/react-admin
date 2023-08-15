import { useCallback, useEffect, useState,useMemo } from 'react'

function A() {
  console.log('A')
  let a = true
  // const handleClick = useCallback(() => {
  //   console.log(a)
  // }, [a])
  const handleClick = () => {
    console.log(a + '123')
  }
  return (
    <div>
      <B onClick={handleClick} />
      <button onClick={() => (a = !a)}>Toggle A</button>
    </div>
  )
}

function B({ onClick }) {
  console.log('B')

  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

function A2() {
  console.log('结束')
  return <A />
}

export default A2

// const handleClick = useCallback(() => {
//   console.log('handleClick', pageInit)
// }, [pageInit])
// const handleClick2 = () => {
//   console.log('handleClick2-------', pageInit)
// }
// handleClick() // 输出1
// handleClick2() // 输出1
// console.log('改变后')
// handleClick() // 输出1
// handleClick2() // 输出2
