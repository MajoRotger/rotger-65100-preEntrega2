import { useState } from "react"
import { useCartContext } from "../context/cartContext"

function ItemCount ({item}) {
    const [count, setCount] = useState(0)

    const {addToCart} = useCartContext()

    const add = () => setCount(count + 1)
    const subtract = () => setCount(count>0 ? (count  - 1) : count)
    const handleAddToCart = () => addToCart({...item, qty: count})

    return (
        <div>
            <p> {count} </p>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount