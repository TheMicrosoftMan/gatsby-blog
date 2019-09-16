import React from "react"
import { Link } from "gatsby"

const Sidebar = ({ siteTitle }) => (
  <aside className="sidebar">
    <Link to="/">
      <span className="sidebar__icon">
        <i class="mi mi-Home" />
      </span>
    </Link>
    <Link to="/blog">
      <span className="sidebar__icon">
        <i class="mi mi-Library" />
      </span>
    </Link>
  </aside>
)

export default Sidebar
