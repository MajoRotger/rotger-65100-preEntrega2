import CartWidget from "./CartWidget"
import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar () {
    return (
        <div className="nav-bar">
            <div className="logo">
                <Link to="/">
                    <h1>Mi Tienda </h1>
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/beauty">Belleza</Link></li>
                <li><Link to="/fragrances">Fragancias</Link></li>
                <li><Link to="/furniture">Muebles</Link></li>
                <li><Link to="/groceries">Comestibles</Link></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar