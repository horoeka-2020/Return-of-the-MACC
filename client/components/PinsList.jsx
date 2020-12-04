import React from 'react'

import PinsListItem from './PinsListItem'

export default function PinsList (props) {
  return (
    <div className=''>
      <h2> Pin List</h2>
      <ul>
      {props.pins.map(pins => {
        return <PinsListItem
          key={pins.id}
          pins={pin} />
      })}
      </ul>
    </div>
  )
}