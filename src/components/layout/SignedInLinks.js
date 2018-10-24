import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/">New Jar</NavLink></li>
      <li><NavLink to="/">Log Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating deep-purple accent-1">RB</NavLink></li>
    </ul>
  )
}

export default SignedInLinks