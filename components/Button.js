import cx from 'classnames'

export default function Button ({ tag = 'button', classNames, primary, link, subtle, ghost, red, orange, yellow, green, cyan, blue, violet, href, onClick = () => {}, ...props }) {
  let newClick = href ? e => { onClick(e); document.location = href } : onClick
  if (tag === 'a') {
    props.href = href
    newClick = onClick
  }
  const Tag = tag
  return <Tag className={cx(classNames, { button: tag !== 'button', primary, link, subtle, ghost, red, orange, yellow, green, cyan, blue, violet })} {...props} onClick={newClick} />
}
