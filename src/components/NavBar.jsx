import CartWidget from "./CartWidget"
import React from 'react'
import "./NavBar.css"

function NavBar () {
    return (
        <div className="nav-bar">
            <div className="logo">
                <h1>Mi Tienda</h1> {/* Reemplaza esto con tu logo */}
            </div>
            <ul className="nav-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar