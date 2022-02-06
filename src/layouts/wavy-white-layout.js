import * as React from 'react'
import * as styles from './wavy-white-layout.module.scss'

const WavyWhiteLayout = ({
  children,
  topSeparator,
  topSeparatorHeight,
  topMargin,
  bottomSeparator,
  bottomSeparatorHeight,
  bottomMargin,
}) => {
  let wrapperStyle = {}
  if (topMargin) {
    wrapperStyle.marginTop = topMargin
  }
  if (bottomMargin) {
    wrapperStyle.marginBottom = bottomMargin
  }

  let topSeparatorStyle = topSeparator ? ({
    height: topSeparatorHeight || '7vw',
    transform: 'translateY(-100%) scaleY(-1)',
    backgroundImage: `url(${topSeparator})`,
  }) : {}

  let bottomSeparatorStyle = bottomSeparator ? ({
    height: bottomSeparatorHeight || topSeparatorHeight || '7vw',
    backgroundImage: `url(${bottomSeparator})`,
  }) : {}

  return (
    <div className={styles.fullwidthWrapper} style={wrapperStyle}>
      <div className={styles.topSeparator} style={topSeparatorStyle}/>
      {children}
      <div className={styles.bottomSeparator} style={bottomSeparatorStyle}/>
    </div>
  )
}

export default WavyWhiteLayout