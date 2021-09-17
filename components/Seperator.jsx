import React from 'react'

export default function Seperator ({ title, ...props }) {
  return title ? (<div className='separator' {...props}>{title}</div>) : <hr {...props} />
}
