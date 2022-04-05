import React from 'react'
import '../../App.css'

export default function Cards(props) {
  return (
    <div className='card'>
        {props.children}
    </div>
  )
}
