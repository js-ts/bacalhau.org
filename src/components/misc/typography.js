import * as React from 'react'
import * as styles from './typography.module.scss'
import classNames from 'classnames'

const Typography = ({ variant, className, ...other }) => {
  let MainTag;
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
      MainTag = variant;
      break;
    case "body1":
    case "body2":
    case "body3":
    case "button":
    default:
      MainTag= 'span'
      break;
  }
  return (
    <MainTag className={classNames(
      className,
      variant ==="h1" && styles.h1,
      variant ==="h2" && styles.h2,
      variant ==="h3" && styles.h3,
      variant ==="h4" && styles.h4,
      variant ==="body1" && styles.body1,
      variant ==="body2" && styles.body2,
      variant ==="body3" && styles.body3,
      variant ==="button" && styles.button,
    )} {...other} />
  )
}

export default Typography