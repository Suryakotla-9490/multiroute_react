import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'

export default function Product() {
  return (
    <div>Product
      <ul>
        <li><NavLink to='/Product/users'>Users</NavLink></li>
        <li><NavLink to='/Product/items'>Products</NavLink> </li>
        </ul>

        <Outlet/>
    </div>
  )
}
