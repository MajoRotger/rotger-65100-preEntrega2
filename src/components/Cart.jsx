import { useCartContext } from "../context/cartContext"
import { Link } from "react-router-dom"

function Cart () {
    const { cart } = useCartContext()
    return (
        <div>
            {cart.map(item => <p key={item.id}>{item.title}</p> )}
            <Link to="/checkout"> Finalizar Compra</Link>
        </div>
    )
}

export default Cart