import ItemCount from "./ItemCount"

function ItemDetail ({ detail }) {
    return (
        <div>
            <p>{detail?.title}</p> 
            <ItemCount item={detail} />
        </div>
    )
}

export default ItemDetail