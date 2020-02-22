import React from "react"
import { Link } from "gatsby"
const NavLink = props => (
  <li style={{ marginRight: `10px` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
    <h3>Awesome Gatsby Site</h3>
    <ul style={{ listStyle: `none`, display: `flex` }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </ul>
    {children}
  </div>
)
