import React from "react"
import { Link } from "gatsby"

const Sidebar = ({ siteTitle }) => (
  <aside className="sidebar">
    <Link to="/">
      <span className="sidebar__icon">
        <i className="mi mi-Home" />
      </span>
    </Link>
    <Link to="/blog">
      <span className="sidebar__icon">
        <i className="mi mi-Dictionary" />
      </span>
    </Link>
    <Link to="/skills">
      <span className="sidebar__icon">
        <i className="mi mi-Code" />
      </span>
    </Link>
    <Link to="/contact">
      <span className="sidebar__icon">
        <i className="mi mi-ContactInfo" />
      </span>
    </Link>
  </aside>
)

export default Sidebar
