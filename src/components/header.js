import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }, { dingwall }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <h1 style={{ color: `red`, zindex: '90000' }}> {dingwall}</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  dingwall: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  dingwall: ``,
}

export default Header
