import React from 'react'
import cx from 'classnames'

export default function Button ({ tag = 'div', shaded, border, ...props }) {
  const Tag = tag
  return <Tag className={cx({ panel: true, shaded, border })} {...props} />
}
