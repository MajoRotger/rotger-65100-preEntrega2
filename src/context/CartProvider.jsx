import { useState } from "react"
import {cartContext} from "./cartContext"

function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const isDuplicated = (item) => cart.some(prod => prod.name === item.name)

    const addToCart = item =>{
        if(isDuplicated(item)){
            alert("el producto ya esta en el carrito")
            return
        }

        setCart([...cart, item]) 

    } 

    

    return (
        <cartContext.Provider value={{cart, addToCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider