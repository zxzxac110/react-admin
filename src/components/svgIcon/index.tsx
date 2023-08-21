import React from 'react'

interface Props {
  name: string
  myClass?: string
}

const SvgIcon: React.FC<Props> = ({ name, myClass }) => {
  return (
    <svg aria-hidden="true" className={'svg-icon ' + myClass}>
      <use href={'#' + name} />
    </svg>
  )
}

export default SvgIcon
