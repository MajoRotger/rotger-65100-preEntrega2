import React from 'react'
import "./CartWidget.css"

function CartWidget () {
    return (
        <div className="cart-widget">
            <span>🛒</span> {/* Aquí puedes agregar un icono de carrito */}
            <span className="cart-count">0</span> {/* Número de artículos en el carrito */}
        </div>
    )
}

export default CartWidget