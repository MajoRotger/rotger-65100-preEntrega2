import React from 'react'
import "./ItemListContainer.css"

function ItemListContainer ({ welcomeMessage }) {
    return (
        <div className="item-list-container">
            <h2>{welcomeMessage}</h2>
            {/* Aquí irá el catálogo de productos en el futuro */}
        </div>
    )
}

export default ItemListContainer