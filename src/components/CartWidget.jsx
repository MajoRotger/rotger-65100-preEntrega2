import React from 'react'
import "./CartWidget.css"
import { useCartContext } from '../context/cartContext'

function CartWidget () {
    const {cart} = useCartContext()
    return (
        <div className="cart-widget">
            <span>🛒</span> {/* Aquí puedes agregar un icono de carrito */}
            <span className="cart-count">{cart.length} </span> {/* Número de artículos en el carrito */}
        </div>
    )
}

export default CartWidget