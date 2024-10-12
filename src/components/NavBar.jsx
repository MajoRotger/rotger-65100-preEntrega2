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
                <li><Link to="/category/Cremas">Cremas</Link></li>
                <li><Link to="/category/Fragancias">Fragancias</Link></li>
                <li><Link to="/category/Bebes">Bebes</Link></li>
                <li><Link to="/category/Esencias">Esencias</Link></li>
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
            
        </div>
    )
}

export default NavBar