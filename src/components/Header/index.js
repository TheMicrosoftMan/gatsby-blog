import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <span>
        <Link to="/">{siteTitle}</Link>
      </span>
    </div>
  </header>
)

export default Header
