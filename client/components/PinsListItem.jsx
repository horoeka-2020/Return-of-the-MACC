import React from 'react'

export default function PinsListItem ({ pin }) {
  return (
    <li className=''>
      {`${pin.username} `}
    </li>
  )
}
