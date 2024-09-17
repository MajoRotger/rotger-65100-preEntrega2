/* eslint-disable react/prop-types */
import Item from "./Item"

function ItemList({ items }) {
    return (
        
        <div>
            {items.map (item => (
                <Item key={item.id} products={item} />
            )
        )}
        </div>
    )
}

export default ItemList