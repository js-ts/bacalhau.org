import * as React from 'react'
import * as styles from './footer.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Footer = () => {
  return (
      <div>
        <div>
          <Link to={'/'}>
            <StaticImage src={'../../images/logo-dark.svg'} alt={'Bacalhau logo'}
            />
          </Link>
        </div>
        <div>
          <Link to={'https://docs.bacalhau.org/'}>
            Documentation
          </Link>
          <Link to={'https://github.com/filecoin-project/bacalhau'}>
             Github
          </Link>
        </div>
        <div>
          <Link to={'https://twitter.com/filecoin/'}>
            Twitter
          </Link>
        </div>
      </div>
  )
}

export default Footer